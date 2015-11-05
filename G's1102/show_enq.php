<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style02.css">
    <link rel="stylesheet" href="jquery.bxslider/jquery.bxslider.css" />
</head>
<body>
  <div class="contents-heading bg-orange">
      <h2 class="section-title text-center">
          <span class="section-title">result</span><span class="section-title__white section-title-ja text-center">結果</span></h2>
  </div>
  <div class="inner contents-box">
  <table class="form-module02">
  <?php
  $ed = file('data/index.txt');
  for ($i = 0; $i < 9; $i++) $ed[$i] = rtrim($ed[$i]);
  print "<tr>";
  print "<td class='form-text'>高坂穂乃果</td>";
  print "<td><table><tr>";
  $w = $ed[0] * 10;
  print "<td width='$w'height='10px' style='background-color:orange;'> </td>";
  print "<td>{$ed[0]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>園田海未</td>";
  print "<td><table><tr>";
  $w = $ed[1] * 10;
  print "<td width='$w' style='background-color:blue;'> </td>";
  print "<td>{$ed[1]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>南ことり</td>";
  print "<td><table><tr>";
  $w = $ed[2] * 10;
  print "<td width='$w' style='background-color:gray;'> </td>";
  print "<td>{$ed[2]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<tr>";
  print "<td>西木野真姫</td>";
  print "<td><table><tr>";
  $w = $ed[3] * 10;
  print "<td width='$w' style='background-color:red;'> </td>";
  print "<td>{$ed[3]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>小泉花陽</td>";
  print "<td><table><tr>";
  $w = $ed[4] * 10;
  print "<td width='$w' style='background-color:green;'> </td>";
  print "<td>{$ed[4]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>星空凛</td>";
  print "<td><table><tr>";
  $w = $ed[5] * 10;
  print "<td width='$w' style='background-color:yellow;'> </td>";
  print "<td>{$ed[5]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<tr>";
  print "<td>絢瀬絵里</td>";
  print "<td><table><tr>";
  $w = $ed[6] * 10;
  print "<td width='$w' style='background-color:aqua;'> </td>";
  print "<td>{$ed[6]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>東條希</td>";
  print "<td><table><tr>";
  $w = $ed[7] * 10;
  print "<td width='$w' style='background-color:violet;'> </td>";
  print "<td>{$ed[7]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";

  print "<td>矢澤にこ</td>";
  print "<td><table><tr>";
  $w = $ed[8] * 10;
  print "<td width='$w' style='background-color:pink;'> </td>";
  print "<td>{$ed[8]} 票</td>";
  print "</tr></table></td>";
  print "</tr>\n";
  ?>
  </table>
</div>
  <!-- <form action="show_enq.php" method="post"> -->
    <!-- <p><input type="submit" value="結果を見る" /></p> -->
  <!-- </form> -->
</body>
</html>
