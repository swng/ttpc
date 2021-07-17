<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>TETRIS Perfect Clear Challenge</title>
  <!-- �O�� css �Ǎ� -->
  <link href="ttt.css" rel="stylesheet" type="text/css">
  <!-- �ڍד���ɂ��Ă͊e js �t�@�C�������Q�Ƃ������� -->
  <script type="text/javascript" src="jsgmod.js"></script>
  <script type="text/javascript" src="data.js"></script>
  <script type="text/javascript" src="problemData.js"></script>
  <script type="text/javascript" src="problem.js"></script>
  <script type="text/javascript" src="ttt.js"></script>
  <!--
  ������
  ・(���ɂȂ�)
-->
</head>
<body onLoad="Execute()">
  <form name="fMain">

    <div id="list_sections" class="layer">
      <p id="title">
        TETRIS Perfect Clear Challenge<br>
      </p>

      <p>
        "I want to master the Perfect Clear Opener for competitive Tetris!"<br>
        If you've ever had that thought, then this is the course for you.<br>
        Out of the 840 opening piece bag combinations, <br>
        you can study all 711 bags that can be used for the Perfect Clear Opener.<br>
      </p>
      <p>
        <b>If you cannot find a solution, press "R" and a guide will appear.</b><br>
        Please reference <a href="TetrisPerfectClear.xlsx">this</a> for the patterns presented and their PC success rates.
      </p>

      <p>
        <input type="button" value="Key Configuration" onClick="gButton='preferences'">
      </p>
      <p>
        ・Key Configurations Are Saved By Cookies.<br>
        ・Please Restart If I Minos Move Too Quickly.<br>
        ・Please Restart If I Minos Move Choppy.<br>
      </p>
      <!
      --�Z�N�V������ҏW�����ꍇ�� data.js �� SectionTitle �ɂ����f���Ă�������-->
      <p>
        Introduction<br>
        <input type="button" value="1  Let's Learn the PC Opener [With Guide]" onClick="gButton='section1'">
        <img src="img/clear.png" class="clear" id="clear0"><br>
      </p>

      <p>
        I Mino Vertical Placements 61%<br>
        <input type="button" value="2  「I Mino Vertical Placements」 14Patterns [With Guide]" onClick="gButton='section2'">
        <img src="img/clear.png" class="clear" id="clear1"><br>
        <input type="button" value="3  「I Mino Vertical Placements」 20Q" onClick="gButton='section3'">
        <img src="img/clear.png" class="clear" id="clear2"><br>
      </p>

      <p>
        I Mino Horizontal Placements 84%<br>
        <input type="button" value="4  「Starting I Mino 1st Row」 6 Patterns [With Guide]" onClick="gButton='section4'">
        <img src="img/clear.png" class="clear" id="clear3"><br>

        <input type="button" value="5  「Starting I Mino 1st Row」 20Q" onClick="gButton='section5'">
        <img src="img/clear.png" class="clear" id="clear4"><br>

        <input type="button" value="6  「All Laying Down Form」 4 Patterns [With Guide]" onClick="gButton='section6'">
        <img src="img/clear.png" class="clear" id="clear5"><br>

        <input type="button" value="7  「All Laying Down Form」 20Q" onClick="gButton='section7'">
        <img src="img/clear.png" class="clear" id="clear6"><br>

        <input type="button" value="8  「IILO Form」 2 Patterns [With Guide]" onClick="gButton='section8'">
        <img src="img/clear.png" class="clear" id="clear7"><br>

        <input type="button" value="9  「IILO Form」 10Q" onClick="gButton='section9'">
        <img src="img/clear.png" class="clear" id="clear8"><br>

        <input type="button" value="10 「Starting I Mino 3rd Row」 3 Patterns [With Guide]" onClick="gButton='section10'">
        <img src="img/clear.png" class="clear" id="clear9"><br>

        <input type="button" value="11 「Starting I Mino 3rd Row」 20Q" onClick="gButton='section11'">
        <img src="img/clear.png" class="clear" id="clear10"><br>

      </p>

      <p>
        I Mino Horizontal Placements Summary<br>
        <input type="button" value="12  Midterm Exam 20Q" onClick="gButton='section12'">
        <img src="img/clear.png" class="clear" id="clear11"><br>
      </p>

      <p>
        If you've made it to here, you've learned 710 out of the 711 possible Perfect Clear Openers.<br>
        For those of you with energy to spare, please learn the final 「LSIO Form」.<br>
      </p>

      <p>
        LSIO Form 84.6%<br>
        <input type="button" value="13 「LSIO Form」 Total 1 Pattern [With Guide]" onClick="gButton='section13'">
        <img src="img/clear.png" class="clear" id="clear12"><br>

        <input type="button" value="14 「LSIO Form」 12Q" onClick="gButton='section14'">
        <img src="img/clear.png" class="clear" id="clear13"><br>

      </p>

      <p>
        Conclusion<br>
        <input type="button" value="15 Final Exam 30Q" onClick="gButton='section15'">
        <img src="img/clear.png" class="clear" id="clear14"><br>

        <input type="button" value="16 Graduation Exam (Mirrored Questions Included) 100Q" onClick="gButton='section16'">
        <img src="img/clear.png" class="clear" id="clear15"><br>

      </p>
      <p>
        Bonus<br>
        <input type="button" value="17 Other Clear Methods" onClick="gButton='section17'">
        <img src="img/clear.png" class="clear" id="clear16"><br>

        <input type="button" value="18 「I Mino Vertical Placements」 Total 514Q" onClick="gButton='section18'">
        <img src="img/clear.png" class="clear" id="clear17"><br>

        <input type="button" value="19 「I Mino Horizontal Placements」 Total 196Q" onClick="gButton='section19'">
        <img src="img/clear.png" class="clear" id="clear18"><br>

        <input type="button" value="20 All 711Q" onClick="gButton='section20'">
        <img src="img/clear.png" class="clear" id="clear19"><br>

        <input type="button" value="21 All 711Q Mirrored" onClick="gButton='section21'">
        <img src="img/clear.png" class="clear" id="clear20"><br>
      </p>

      <p>
        ■Author<br>
        <a href="https://form1ssl.fc2.com/form/?id=685fca71e208118a">chokotia</a><br>
      </p>
      <p>
        ■Reference Sites<br>
        <a href="http://taninkona.web.fc2.com/ttt/">TETRiS TRAiNER TRES-BiEN</a><br>
        <a href="https://docs.google.com/spreadsheets/d/1bVY3t_X96xRmUL0qdgB9tViSIGenu6RMKX4RW7qWg8Y/edit#gid=376091749">Tetris Perfect Clear Success Rates</a><br>
        <a href="http://waka.nu/tetris/">喜竹屋本舗</a><br>
        <a href="http://harddrop.com/wiki/Main_Page">Hard Drop Wiki</a><br>
        <a href="http://www46.atwiki.jp/tojkazuto/">Tetris Strategy and Tournament News Compilation</a><br>
        <a href="http://www59.atwiki.jp/tetple/pages/1.html">Tetris Methods Collection</a><br>
      </p>
      <p>
        ■Play Tetris for Free!<br>
      <a href="http://www.tetrisfriends.com/">Tetris Friends</a><br>
      <a href="http://www.nicovideo.jp/watch/sm16847148">How to start playing Tetris Friends!(NicoNico Douga)</a><br>
      <a href="http://www.geocities.jp/teto_kozo/">テトフレ小僧 (『Tetris Friends』の始め方＆遊び方解説)</a><br>
      </p>
    </div>
    <div id="list_problems" class="layer">
      <p>
        <input type="text" id="section_title" class="center" style="width: 560px;">
      </p>
      <p>
        <input type="button" id="prob0" value="" onClick="gButton='problem1'"><br>
        <input type="button" id="prob1" value="" onClick="gButton='problem2'"><br>
      </p>
      <p>
        <input type="button" value="��BACK" onClick="gButton='previous'">�@
        <input type="button" value="NEXT��" onClick="gButton='next'">
      </p>
      <p>
        <input type="button" value="Return to Main Screen" onClick="gButton='back'">
      </p>
    </div>

    <div id="perform" class="layer center">
      <p>
        <input type="text" id="perform_caption" class="center" style="width: 680px;"><br>
      </p>
      <table>

        <td style="padding-right: 16px">
          <p class="small">
            HOLD
          </p>
          <p>
            <img src="img/b0.png" id="h0_0" width="12" height="12"><img src="img/b0.png" id="h0_1" width="12" height="12"
            ><img src="img/b0.png" id="h0_2" width="12" height="12"><img src="img/b0.png" id="h0_3" width="12" height="12"><br>
            <img src="img/b0.png" id="h1_0" width="12" height="12"><img src="img/b0.png" id="h1_1" width="12" height="12"
            ><img src="img/b0.png" id="h1_2" width="12" height="12"><img src="img/b0.png" id="h1_3" width="12" height="12"><br>
            <img src="img/b0.png" id="h2_0" width="12" height="12"><img src="img/b0.png" id="h2_1" width="12" height="12"
            ><img src="img/b0.png" id="h2_2" width="12" height="12"><img src="img/b0.png" id="h2_3" width="12" height="12"><br>
            <img src="img/b0.png" id="h3_0" width="12" height="12"><img src="img/b0.png" id="h3_1" width="12" height="12"
            ><img src="img/b0.png" id="h3_2" width="12" height="12"><img src="img/b0.png" id="h3_3" width="12" height="12"><br>
          </p>
        </td>

        <td>
          <img src="img/b0.png" id="m0_0"><img src="img/b0.png" id="m0_1"><img src="img/b0.png" id="m0_2"
          ><img src="img/b0.png" id="m0_3"><img src="img/b0.png" id="m0_4"><img src="img/b0.png" id="m0_5"
          ><img src="img/b0.png" id="m0_6"><img src="img/b0.png" id="m0_7"><img src="img/b0.png" id="m0_8"
          ><img src="img/b0.png" id="m0_9"><br>
          <img src="img/b0.png" id="m1_0"><img src="img/b0.png" id="m1_1"><img src="img/b0.png" id="m1_2"
          ><img src="img/b0.png" id="m1_3"><img src="img/b0.png" id="m1_4"><img src="img/b0.png" id="m1_5"
          ><img src="img/b0.png" id="m1_6"><img src="img/b0.png" id="m1_7"><img src="img/b0.png" id="m1_8"
          ><img src="img/b0.png" id="m1_9"><br>
          <img src="img/b0.png" id="m2_0"><img src="img/b0.png" id="m2_1"><img src="img/b0.png" id="m2_2"
          ><img src="img/b0.png" id="m2_3"><img src="img/b0.png" id="m2_4"><img src="img/b0.png" id="m2_5"
          ><img src="img/b0.png" id="m2_6"><img src="img/b0.png" id="m2_7"><img src="img/b0.png" id="m2_8"
          ><img src="img/b0.png" id="m2_9"><br>
          <img src="img/b0.png" id="m3_0"><img src="img/b0.png" id="m3_1"><img src="img/b0.png" id="m3_2"
          ><img src="img/b0.png" id="m3_3"><img src="img/b0.png" id="m3_4"><img src="img/b0.png" id="m3_5"
          ><img src="img/b0.png" id="m3_6"><img src="img/b0.png" id="m3_7"><img src="img/b0.png" id="m3_8"
          ><img src="img/b0.png" id="m3_9"><br>
          <img src="img/b0.png" id="m4_0"><img src="img/b0.png" id="m4_1"><img src="img/b0.png" id="m4_2"
          ><img src="img/b0.png" id="m4_3"><img src="img/b0.png" id="m4_4"><img src="img/b0.png" id="m4_5"
          ><img src="img/b0.png" id="m4_6"><img src="img/b0.png" id="m4_7"><img src="img/b0.png" id="m4_8"
          ><img src="img/b0.png" id="m4_9"><br>
          <img src="img/b0.png" id="m5_0"><img src="img/b0.png" id="m5_1"><img src="img/b0.png" id="m5_2"
          ><img src="img/b0.png" id="m5_3"><img src="img/b0.png" id="m5_4"><img src="img/b0.png" id="m5_5"
          ><img src="img/b0.png" id="m5_6"><img src="img/b0.png" id="m5_7"><img src="img/b0.png" id="m5_8"
          ><img src="img/b0.png" id="m5_9"><br>
          <img src="img/b0.png" id="m6_0"><img src="img/b0.png" id="m6_1"><img src="img/b0.png" id="m6_2"
          ><img src="img/b0.png" id="m6_3"><img src="img/b0.png" id="m6_4"><img src="img/b0.png" id="m6_5"
          ><img src="img/b0.png" id="m6_6"><img src="img/b0.png" id="m6_7"><img src="img/b0.png" id="m6_8"
          ><img src="img/b0.png" id="m6_9"><br>
          <img src="img/b0.png" id="m7_0"><img src="img/b0.png" id="m7_1"><img src="img/b0.png" id="m7_2"
          ><img src="img/b0.png" id="m7_3"><img src="img/b0.png" id="m7_4"><img src="img/b0.png" id="m7_5"
          ><img src="img/b0.png" id="m7_6"><img src="img/b0.png" id="m7_7"><img src="img/b0.png" id="m7_8"
          ><img src="img/b0.png" id="m7_9"><br>
          <img src="img/b0.png" id="m8_0"><img src="img/b0.png" id="m8_1"><img src="img/b0.png" id="m8_2"
          ><img src="img/b0.png" id="m8_3"><img src="img/b0.png" id="m8_4"><img src="img/b0.png" id="m8_5"
          ><img src="img/b0.png" id="m8_6"><img src="img/b0.png" id="m8_7"><img src="img/b0.png" id="m8_8"
          ><img src="img/b0.png" id="m8_9"><br>
          <img src="img/b0.png" id="m9_0"><img src="img/b0.png" id="m9_1"><img src="img/b0.png" id="m9_2"
          ><img src="img/b0.png" id="m9_3"><img src="img/b0.png" id="m9_4"><img src="img/b0.png" id="m9_5"
          ><img src="img/b0.png" id="m9_6"><img src="img/b0.png" id="m9_7"><img src="img/b0.png" id="m9_8"
          ><img src="img/b0.png" id="m9_9"><br>
          <img src="img/b0.png" id="m10_0"><img src="img/b0.png" id="m10_1"><img src="img/b0.png" id="m10_2"
          ><img src="img/b0.png" id="m10_3"><img src="img/b0.png" id="m10_4"><img src="img/b0.png" id="m10_5"
          ><img src="img/b0.png" id="m10_6"><img src="img/b0.png" id="m10_7"><img src="img/b0.png" id="m10_8"
          ><img src="img/b0.png" id="m10_9"><br>
          <img src="img/b0.png" id="m11_0"><img src="img/b0.png" id="m11_1"><img src="img/b0.png" id="m11_2"
          ><img src="img/b0.png" id="m11_3"><img src="img/b0.png" id="m11_4"><img src="img/b0.png" id="m11_5"
          ><img src="img/b0.png" id="m11_6"><img src="img/b0.png" id="m11_7"><img src="img/b0.png" id="m11_8"
          ><img src="img/b0.png" id="m11_9"><br>
          <img src="img/b0.png" id="m12_0"><img src="img/b0.png" id="m12_1"><img src="img/b0.png" id="m12_2"
          ><img src="img/b0.png" id="m12_3"><img src="img/b0.png" id="m12_4"><img src="img/b0.png" id="m12_5"
          ><img src="img/b0.png" id="m12_6"><img src="img/b0.png" id="m12_7"><img src="img/b0.png" id="m12_8"
          ><img src="img/b0.png" id="m12_9"><br>
          <img src="img/b0.png" id="m13_0"><img src="img/b0.png" id="m13_1"><img src="img/b0.png" id="m13_2"
          ><img src="img/b0.png" id="m13_3"><img src="img/b0.png" id="m13_4"><img src="img/b0.png" id="m13_5"
          ><img src="img/b0.png" id="m13_6"><img src="img/b0.png" id="m13_7"><img src="img/b0.png" id="m13_8"
          ><img src="img/b0.png" id="m13_9"><br>
          <img src="img/b0.png" id="m14_0"><img src="img/b0.png" id="m14_1"><img src="img/b0.png" id="m14_2"
          ><img src="img/b0.png" id="m14_3"><img src="img/b0.png" id="m14_4"><img src="img/b0.png" id="m14_5"
          ><img src="img/b0.png" id="m14_6"><img src="img/b0.png" id="m14_7"><img src="img/b0.png" id="m14_8"
          ><img src="img/b0.png" id="m14_9"><br>
          <img src="img/b0.png" id="m15_0"><img src="img/b0.png" id="m15_1"><img src="img/b0.png" id="m15_2"
          ><img src="img/b0.png" id="m15_3"><img src="img/b0.png" id="m15_4"><img src="img/b0.png" id="m15_5"
          ><img src="img/b0.png" id="m15_6"><img src="img/b0.png" id="m15_7"><img src="img/b0.png" id="m15_8"
          ><img src="img/b0.png" id="m15_9"><br>
          <img src="img/b0.png" id="m16_0"><img src="img/b0.png" id="m16_1"><img src="img/b0.png" id="m16_2"
          ><img src="img/b0.png" id="m16_3"><img src="img/b0.png" id="m16_4"><img src="img/b0.png" id="m16_5"
          ><img src="img/b0.png" id="m16_6"><img src="img/b0.png" id="m16_7"><img src="img/b0.png" id="m16_8"
          ><img src="img/b0.png" id="m16_9"><br>
          <img src="img/b0.png" id="m17_0"><img src="img/b0.png" id="m17_1"><img src="img/b0.png" id="m17_2"
          ><img src="img/b0.png" id="m17_3"><img src="img/b0.png" id="m17_4"><img src="img/b0.png" id="m17_5"
          ><img src="img/b0.png" id="m17_6"><img src="img/b0.png" id="m17_7"><img src="img/b0.png" id="m17_8"
          ><img src="img/b0.png" id="m17_9"><br>
          <img src="img/b0.png" id="m18_0"><img src="img/b0.png" id="m18_1"><img src="img/b0.png" id="m18_2"
          ><img src="img/b0.png" id="m18_3"><img src="img/b0.png" id="m18_4"><img src="img/b0.png" id="m18_5"
          ><img src="img/b0.png" id="m18_6"><img src="img/b0.png" id="m18_7"><img src="img/b0.png" id="m18_8"
          ><img src="img/b0.png" id="m18_9"><br>
          <img src="img/b0.png" id="m19_0"><img src="img/b0.png" id="m19_1"><img src="img/b0.png" id="m19_2"
          ><img src="img/b0.png" id="m19_3"><img src="img/b0.png" id="m19_4"><img src="img/b0.png" id="m19_5"
          ><img src="img/b0.png" id="m19_6"><img src="img/b0.png" id="m19_7"><img src="img/b0.png" id="m19_8"
          ><img src="img/b0.png" id="m19_9"><br>
        </td>
        <td style="padding-left: 16px">
          <p>
            <input type="button" value="Return to Questions" onClick="gButton='back'" style="width: 200px; height: 30px;"><br>
            <textarea type="text" id="perform_hint" style="width: 280px; height: 96px;"></textarea>
          </p>
          <p class="small">
            NEXT
          </p>
          <p>
            <img src="img/b0.png" id="n0_0_0" width="12" height="12"><img src="img/b0.png" id="n0_0_1" width="12" height="12"
            ><img src="img/b0.png" id="n0_0_2" width="12" height="12"><img src="img/b0.png" id="n0_0_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n0_1_0" width="12" height="12"><img src="img/b0.png" id="n0_1_1" width="12" height="12"
            ><img src="img/b0.png" id="n0_1_2" width="12" height="12"><img src="img/b0.png" id="n0_1_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n0_2_0" width="12" height="12"><img src="img/b0.png" id="n0_2_1" width="12" height="12"
            ><img src="img/b0.png" id="n0_2_2" width="12" height="12"><img src="img/b0.png" id="n0_2_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n0_3_0" width="12" height="12"><img src="img/b0.png" id="n0_3_1" width="12" height="12"
            ><img src="img/b0.png" id="n0_3_2" width="12" height="12"><img src="img/b0.png" id="n0_3_3" width="12" height="12"><br>
          </p>
          <p>
            <img src="img/b0.png" id="n1_0_0" width="12" height="12"><img src="img/b0.png" id="n1_0_1" width="12" height="12"
            ><img src="img/b0.png" id="n1_0_2" width="12" height="12"><img src="img/b0.png" id="n1_0_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n1_1_0" width="12" height="12"><img src="img/b0.png" id="n1_1_1" width="12" height="12"
            ><img src="img/b0.png" id="n1_1_2" width="12" height="12"><img src="img/b0.png" id="n1_1_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n1_2_0" width="12" height="12"><img src="img/b0.png" id="n1_2_1" width="12" height="12"
            ><img src="img/b0.png" id="n1_2_2" width="12" height="12"><img src="img/b0.png" id="n1_2_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n1_3_0" width="12" height="12"><img src="img/b0.png" id="n1_3_1" width="12" height="12"
            ><img src="img/b0.png" id="n1_3_2" width="12" height="12"><img src="img/b0.png" id="n1_3_3" width="12" height="12"><br>
          </p>
          <p>
            <img src="img/b0.png" id="n2_0_0" width="12" height="12"><img src="img/b0.png" id="n2_0_1" width="12" height="12"
            ><img src="img/b0.png" id="n2_0_2" width="12" height="12"><img src="img/b0.png" id="n2_0_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n2_1_0" width="12" height="12"><img src="img/b0.png" id="n2_1_1" width="12" height="12"
            ><img src="img/b0.png" id="n2_1_2" width="12" height="12"><img src="img/b0.png" id="n2_1_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n2_2_0" width="12" height="12"><img src="img/b0.png" id="n2_2_1" width="12" height="12"
            ><img src="img/b0.png" id="n2_2_2" width="12" height="12"><img src="img/b0.png" id="n2_2_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n2_3_0" width="12" height="12"><img src="img/b0.png" id="n2_3_1" width="12" height="12"
            ><img src="img/b0.png" id="n2_3_2" width="12" height="12"><img src="img/b0.png" id="n2_3_3" width="12" height="12"><br>
          </p>
          <p>
            <img src="img/b0.png" id="n3_0_0" width="12" height="12"><img src="img/b0.png" id="n3_0_1" width="12" height="12"
            ><img src="img/b0.png" id="n3_0_2" width="12" height="12"><img src="img/b0.png" id="n3_0_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n3_1_0" width="12" height="12"><img src="img/b0.png" id="n3_1_1" width="12" height="12"
            ><img src="img/b0.png" id="n3_1_2" width="12" height="12"><img src="img/b0.png" id="n3_1_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n3_2_0" width="12" height="12"><img src="img/b0.png" id="n3_2_1" width="12" height="12"
            ><img src="img/b0.png" id="n3_2_2" width="12" height="12"><img src="img/b0.png" id="n3_2_3" width="12" height="12"><br>
            <img src="img/b0.png" id="n3_3_0" width="12" height="12"><img src="img/b0.png" id="n3_3_1" width="12" height="12"
            ><img src="img/b0.png" id="n3_3_2" width="12" height="12"><img src="img/b0.png" id="n3_3_3" width="12" height="12"><br>
          </p>
          <p>
            <p>
              <img src="img/b0.png" id="n4_0_0" width="12" height="12"><img src="img/b0.png" id="n4_0_1" width="12" height="12"
              ><img src="img/b0.png" id="n4_0_2" width="12" height="12"><img src="img/b0.png" id="n4_0_3" width="12" height="12"><br>
              <img src="img/b0.png" id="n4_1_0" width="12" height="12"><img src="img/b0.png" id="n4_1_1" width="12" height="12"
              ><img src="img/b0.png" id="n4_1_2" width="12" height="12"><img src="img/b0.png" id="n4_1_3" width="12" height="12"><br>
              <img src="img/b0.png" id="n4_2_0" width="12" height="12"><img src="img/b0.png" id="n4_2_1" width="12" height="12"
              ><img src="img/b0.png" id="n4_2_2" width="12" height="12"><img src="img/b0.png" id="n4_2_3" width="12" height="12"><br>
              <img src="img/b0.png" id="n4_3_0" width="12" height="12"><img src="img/b0.png" id="n4_3_1" width="12" height="12"
              ><img src="img/b0.png" id="n4_3_2" width="12" height="12"><img src="img/b0.png" id="n4_3_3" width="12" height="12"><br>
            </p>
          </td>

          <td style="width: 10%"></td>
        </table>
      </div>

      <div id="preferences" class="layer">
        <p>
          Move Left・・ <select id="key_left">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Move Right・・<select id="key_right">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Soft Drop・・ <select id="key_softdrop">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Hard Drop・・ <select id="key_harddrop">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Right Rotate・<select id="key_rot_right">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Left Rotate・ <select id="key_rot_left">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Hold・・・・・ <select id="key_hold">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
          Use Guide・・ <select id="key_guide">
            <option value="0">0</option><option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option><option value="5">5</option>
            <option value="6">6</option><option value="7">7</option><option value="8">8</option>
            <option value="9">9</option><option value="A">A</option><option value="B">B</option>
            <option value="C">C</option><option value="D">D</option><option value="E">E</option>
            <option value="F">F</option><option value="G">G</option><option value="H">H</option>
            <option value="I">I</option><option value="J">J</option><option value="K">K</option>
            <option value="L">L</option><option value="M">M</option><option value="N">N</option>
            <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
            <option value="R">R</option><option value="S">S</option><option value="T">T</option>
            <option value="U">U</option><option value="V">V</option><option value="W">W</option>
            <option value="X">X</option><option value="Y">Y</option><option value="Z">Z</option>
            <option value="-">-</option><option value="^">^</option><option value="¥¥">¥</option>
            <option value="@">@</option><option value="[">[</option><option value=";">;</option>
            <option value=":">:</option><option value="]">]</option><option value=",">,</option>
            <option value=".">.</option><option value="/">/</option><option value="+">+</option>
            <option value="*">*</option><option value="Space">Space</option>
            <option value="Enter">Enter</option><option value="Tab">Tab</option>
            <option value="Shift">Shift</option><option value="Ctrl">Ctrl</option>
            <option value="Alt">Alt</option><option value="Esc">Esc</option>
            <option value="Backspace">Backspace</option><option value="Insert">Insert</option>
            <option value="Delete">Delete</option><option value="F1">F1</option>
            <option value="F2">F2</option><option value="F3">F3</option>
            <option value="F4">F4</option><option value="F5">F5</option>
            <option value="F6">F6</option><option value="F7">F7</option>
            <option value="F8">F8</option><option value="F9">F9</option>
            <option value="F10">F10</option><option value="F11">F11</option>
            <option value="F12">F12</option><option value="Up">↑</option>
            <option value="Left">←</option><option value="Right">→</option>
            <option value="Down">↓</option>
          </select><br>
        </p>
        <input type="button" value="OK" onClick="gButton='ok'">
        <input type="button" value="Cancel" onClick="gButton='cancel'">
      </div>

    </form>

  </body>
  </html>
