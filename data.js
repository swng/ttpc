/*========================================================================================
□■ data.js ■□
========================================================================================*/
/*----------------------------------------------------------------------------------------
☆★ 定数一覧 ★☆
----------------------------------------------------------------------------------------*/
var MATRIX_WIDTH = 10;               // マトリックスの横ブロック数
var DEADLINE_HEIGHT = 3;             // デッドライン以上でブロックの情報を保持する高さ
var MATRIX_HEIGHT = 23;              // マトリックスの縦ブロック数。デッドライン以上を含む
var SOFT_DROP_SPAN = 1;              // <フレーム> ソフトドロップで 1 マス進むまでの時間
var NATURAL_DROP_SPAN = 36;          // <フレーム> 自然落下で 1 マス進むまでの時間
var LINE_CLEAR_DURATION = 15;        // <フレーム> ライン消去演出の時間
var DISPLAY_FEATURES_DURATION = 45;  // <フレーム> 発動した技の表示時間
var NEXT_MINOS = 5;                  // ネクスト表示数
var ROTATE_RULES = 5;                // 回転ルール数
var HORIZONTAL_CHARGE_DURATION = 7;  // <フレーム> キーを押し始めてから横移動リピート開始までの時間
var HORIZONTAL_REPEAT_SPAN = 1;      // <フレーム> 横移動の時間感覚

var INITIAL_DIR = 0;                  // 出現時のミノの向き
var INITIAL_X = 3;                    // 出現時のミノの X 座標
var INITIAL_Y = DEADLINE_HEIGHT - 2;  // 出現時のミノの Y 座標

var DEFAULT_KEY_MOVE_LEFT    = 'Left';
var DEFAULT_KEY_MOVE_RIGHT   = 'Right';
var DEFAULT_KEY_SOFTDROP     = 'Down';
var DEFAULT_KEY_HARDDROP     = 'Up';
var DEFAULT_KEY_ROTATE_RIGHT = 'X';
var DEFAULT_KEY_ROTATE_LEFT  = 'Z';
var DEFAULT_KEY_HOLD         = 'Shift';
var DEFAULT_KEY_GUIDE        = 'R';

var DUMP_GUIDE_DATA = true;            // ガイド配列ダンプ用

var SECTION_NUM = 21;            // ガイド配列ダンプ用

/*----------------------------------------------------------------------------------------
☆★ マトリックス配列  [y][x] ★☆

設置済ブロックの配列です。落下中のブロック等は別に管理します。
----------------------------------------------------------------------------------------*/
var gMatrix = [];
for(var i = 0; i < MATRIX_HEIGHT; i++){
  gMatrix.push([]);
  for(var j = 0; j < MATRIX_WIDTH; j++){
    gMatrix[i].push(0);
  }
}
/*----------------------------------------------------------------------------------------
☆★ オブジェクト: 各種ブロック ★☆
----------------------------------------------------------------------------------------*/
function Block(id){
  this.id = id;
  this.toVanish = (id == 2);           // 消去予約されているブロック?

  switch(id){
    case 0:  // 空き
    this.passable = true;    // すり抜け可能?
    break;
    case 1:  // 灰色ブロック
    this.passable = false;
    break;
    case 2:  // 消去演出中のブロック。RemoveReservedLines で一斉消去される
    this.passable = true;
    break;
    // 設置済の各ブロック
    case 21: case 22: case 23: case 24: case 25: case 26: case 27:
    this.passable = false;
    break;
    // その他の各ブロック
    case 11: case 12: case 13: case 14: case 15: case 16: case 17:
    case 31: case 32: case 33: case 34: case 35: case 36: case 37:
    case 41: case 42: case 43: case 44: case 45: case 46: case 47:
    case 51: case 52: case 53: case 54: case 55: case 56: case 57:
    case 511: case 512: case 513: case 514: case 515: case 516: case 517:
    case 521: case 522: case 523: case 524: case 525: case 526: case 527:
    case 531: case 532: case 533: case 534: case 535: case 536: case 537:
    case 541: case 542: case 543: case 544: case 545: case 546: case 547:
    case 551: case 552: case 553: case 554: case 555: case 556: case 557:
    case 561: case 562: case 563: case 564: case 565: case 566: case 567:
    case 571: case 572: case 573: case 574: case 575: case 576: case 577:
    this.passable = false;
    break;
    // その他の番号(存在しないブロック)なら画像のキャッシュを取らない
    default:
    this.passable = false;
    return;
  }

  this.image = 'img/b' + id + '.png';  // 画像。24 x 24 ピクセル
  this.cache = new Image();
  this.cache.src = this.image;
}
/*----------------------------------------------------------------------------------------
☆★ ブロックオブジェクトへのアクセス ★☆
----------------------------------------------------------------------------------------*/
var gBlocks = [];
//for(var i = 0; i <= 57; i++) gBlocks.push(new Block(i));
for(var i = 0; i <= 577; i++) gBlocks.push(new Block(i));
function BlkEmpty(){return gBlocks[0] }
function BlkVanishing(){return gBlocks[2] }
/*----------------------------------------------------------------------------------------
☆★ オブジェクト: 一般的な回転ルール (ROTation RULE - GENeral) ★☆
----------------------------------------------------------------------------------------*/
function RotRuleGen(){
  // [回転方向(0=右, 1=左)][回転前のミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ルール ID ]
  this.dx = [[[0, -1, -1,  0, -1],    // i → r
  [0,  1,  1,  0,  1],    // r → v
  [0,  1,  1,  0,  1],    // v → l
  [0, -1, -1,  0, -1]],   // l → i
  [[0,  1,  1,  0,  1],    // i → l
  [0,  1,  1,  0,  1],    // r → i
  [0, -1, -1,  0, -1],    // v → r
  [0, -1, -1,  0, -1]]];  // l → v
  this.dy = [[[0,  0, -1,  2,  2],    // i → r
  [0,  0,  1, -2, -2],    // r → v
  [0,  0, -1,  2,  2],    // v → l
  [0,  0,  1, -2, -2]],   // l → i
  [[0,  0, -1,  2,  2],    // i → l
  [0,  0,  1, -2, -2],    // r → i
  [0,  0, -1,  2,  2],    // v → r
  [0,  0,  1, -2, -2]]];  // l → v
  return this;
}
/*----------------------------------------------------------------------------------------
☆★ オブジェクト: I ミノの回転ルール (ROTation RULE - I) ★☆
----------------------------------------------------------------------------------------*/
function RotRuleI(){
  // [回転方向(0=右, 1=左)][回転前のミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ルール ID ]
  this.dx = [[[0, -2,  1, -2,  1],    // i → r
  [0, -1,  2, -1,  2],    // r → v
  [0,  2, -1,  2, -1],    // v → l
  [0,  1, -2,  1, -2]],   // l → i
  [[0, -1,  2, -1,  2],    // i → l
  [0,  2, -1,  2, -1],    // r → i
  [0,  1, -2,  1, -2],    // v → r
  [0, -2,  1, -2,  1]]];  // l → v
  this.dy = [[[0,  0,  0,  1, -2],    // i → r
  [0,  0,  0, -2,  1],    // r → v
  [0,  0,  0, -1,  2],    // v → l
  [0,  0,  0,  2, -1]],   // l → i
  [[0,  0,  0, -2,  1],    // i → l
  [0,  0,  0, -1,  2],    // r → i
  [0,  0,  0,  2, -1],    // v → r
  [0,  0,  0,  1, -2]]];  // l → v
  return this;
}
/*----------------------------------------------------------------------------------------
☆★ 各回転ルールへのアクセス設定 ★☆
----------------------------------------------------------------------------------------*/
var gRotationRuleGeneral = new RotRuleGen();
var gRotationRuleI = new RotRuleI();
/*----------------------------------------------------------------------------------------
☆★ オブジェクト: 各種ミノ ★☆
----------------------------------------------------------------------------------------*/
function IMino(){
  this.id = 1;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0]],

  [[0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]]];
  this.activeBlockId = 11;
  this.placedBlockId = 21;
  this.ghostBlockId  = 31;
  this.guideBlockId  = 41;
  this.ghostGuideBlockId = 51;
  this.rotationRule = gRotationRuleI;
  return this;
}
//----------------------------------------------------------------------------------------
function TMino(){
  this.id = 2;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]],

  [[0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 12;
  this.placedBlockId = 22;
  this.ghostBlockId  = 32;
  this.guideBlockId  = 42;
  this.ghostGuideBlockId = 52;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function JMino(){
  this.id = 3;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[1, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]],

  [[0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 13;
  this.placedBlockId = 23;
  this.ghostBlockId  = 33;
  this.guideBlockId  = 43;
  this.ghostGuideBlockId = 53;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function LMino(){
  this.id = 4;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[0, 0, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]],

  [[0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0]],

  [[1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 14;
  this.placedBlockId = 24;
  this.ghostBlockId  = 34;
  this.guideBlockId  = 44;
  this.ghostGuideBlockId = 54;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function ZMino(){
  this.id = 5;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]],

  [[0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 15;
  this.placedBlockId = 25;
  this.ghostBlockId  = 35;
  this.guideBlockId  = 45;
  this.ghostGuideBlockId = 55;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function SMino(){
  this.id = 6;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0]],

  [[0, 0, 0, 0],
  [0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0]],

  [[1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 16;
  this.placedBlockId = 26;
  this.ghostBlockId  = 36;
  this.guideBlockId  = 46;
  this.ghostGuideBlockId = 56;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function OMino(){
  this.id = 7;
  // [ミノの向き(0=出現時, 1=右, 2=逆, 3=左)][ Y 座標][ X 座標]
  this.shape = [[[0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  [[0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]]];
  this.activeBlockId = 17;
  this.placedBlockId = 27;
  this.ghostBlockId  = 37;
  this.guideBlockId  = 47;
  this.ghostGuideBlockId = 57;
  this.rotationRule = gRotationRuleGeneral;  // 必要ないですが便宜上
  return this;
}
/*----------------------------------------------------------------------------------------
★☆ T-SPIN 判定に用いるブロック位置 ☆★

ttt.js の TsType 内から呼び出されます。[dir][y][x]
1 になっている場所(各 4 箇所)のうち 3 箇所以上が通過不可ならば T-SPIN と判定されます。
----------------------------------------------------------------------------------------*/
var gTsTiles = [[[1, 0, 1, 0],
[0, 0, 0, 0],
[1, 0, 1, 0],
[0, 0, 0, 0]],
[[1, 0, 1, 0],
[0, 0, 0, 0],
[1, 0, 1, 0],
[0, 0, 0, 0]],
[[1, 0, 1, 0],
[0, 0, 0, 0],
[1, 0, 1, 0],
[0, 0, 0, 0]],
[[1, 0, 1, 0],
[0, 0, 0, 0],
[1, 0, 1, 0],
[0, 0, 0, 0]]];
/*----------------------------------------------------------------------------------------
★☆ T-SPIN MINI 判定に用いるブロック位置 ☆★

ttt.js の TsType 内から呼び出されます。[dir][y][x]
//----------------------------------------------------------------------------------------
T-SPIN が成立している場合、それが通常の T-SPIN か、あるいは T-SPIN MINI かを判定します。
1 になっている場所(各 2 箇所)が 2 箇所とも通過不可ならば T-SPIN に、そうでなければ T-SPIN
MINI と判定されます。例外的に、直前に第 5 候補の回転をした場合は T-SPIN MINI にならなくな
ります( TST 風の回転や「 T-SPIN FIN 」等)。
----------------------------------------------------------------------------------------*/
var gTssTiles = [[[1, 0, 1, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]],
[[0, 0, 1, 0],
[0, 0, 0, 0],
[0, 0, 1, 0],
[0, 0, 0, 0]],
[[0, 0, 0, 0],
[0, 0, 0, 0],
[1, 0, 1, 0],
[0, 0, 0, 0]],
[[1, 0, 0, 0],
[0, 0, 0, 0],
[1, 0, 0, 0],
[0, 0, 0, 0]]];
/*----------------------------------------------------------------------------------------
☆★ 各ミノへのアクセス設定 ★☆
----------------------------------------------------------------------------------------*/
var I = new IMino();
var T = new TMino();
var J = new JMino();
var L = new LMino();
var Z = new ZMino();
var S = new SMino();
var O = new OMino();
var gMino = [null, I, T, J, L, Z, S, O];
/*----------------------------------------------------------------------------------------
☆★ オブジェクト: ガイド ★☆

ミノは自動的に今動かしているものが選ばれます。
----------------------------------------------------------------------------------------*/
function Guide(mino, dir, x, y){
  this.mino = mino;
  this.dir = dir;
  this.x = x;
  this.y = y;  // デッドラインの分は含めない
}
/*----------------------------------------------------------------------------------------
☆★ ガイドオブジェクト生成の簡略表記 ★☆
----------------------------------------------------------------------------------------*/
function G(mino, dir, x, y){
  return new Guide(mino, dir, x, y);
}
/*----------------------------------------------------------------------------------------
☆★ セクション名の取得 ★☆

<id>番目のセクション名を取得します。ここを編集した場合は、忘れずに index.html にも反映さ
せてください。
----------------------------------------------------------------------------------------*/
function SectionTitle(id){
  switch(id){
    case  0: return '1  PC Opener Warmup'; break;
    case  1: return '2  「I Mino Vertical Placements」 14 Patterns'; break;
    case  2: return '3  「I Mino Vertical Placements」'; break;
    case  3: return '4  「Starting I Mino 1st Row」 6 Patterns'; break;
    case  4: return '5  「Starting I Mino 1st Row」 20Q'; break;
    case  5: return '6  「All Laying Down Form」 4 Patterns'; break;
    case  6: return '7  「All Laying Down Form」 20Q'; break;
    case  7: return '8  「IILO Form」 2 Patterns'; break;
    case  8: return '9  「IILO Form」 10Q'; break;
    case  9: return '10 「Starting I Mino 3rd Row」 3 Patterns'; break;
    case 10: return '11 「Starting I Mino 3rd Row」 20Q'; break;
    case 11: return '12 Midterm Exam 20Q'; break;
    case 12: return '13 「LSIO Form」 Total 1 Pattern'; break;
    case 13: return '14 「LSIO Form」 12Q'; break;
    case 14: return '15 Final Exam 30Q'; break;
    case 15: return '16 Grduation Exam （Mirrored Questions Included） 100Q'; break;
    case 16: return '17 Other Solution Methods'; break;
    case 17: return '18 「I Mino Vertical Placement」 Total 514Q'; break;
    case 18: return '19 「I Mino Horizontal Placement」 Total 196Q'; break;
    case 19: return '20 Total 711Q'; break;
    case 20: return '21 Total 711Q Mirrored (Contents Unchecked)'; break;
  }
  return "?";
}
