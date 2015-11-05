<?php
session_start();

$res_file = fopen('data/data.csv', 'w+');
$array = array('name' => $_SESSION['name'], 'age' => $_SESSION['age'], 'email' => $_SESSION['email'], 'sex' => $_SESSION['sex']);
fputcsv($res_file, $array);
fclose($res_file);

$ed = file('data/index.txt');
for ($i = 0; $i < 9; $i++) $ed[$i] = rtrim($ed[$i]);
if ($_POST['submit']) {
  $ed[$_SESSION['index']]++;
  $fp = fopen('data/index.txt', 'w');
  for ($i = 0; $i < 9; $i++) {
    fwrite($fp, $ed[$i] . "\n");
  }
  fclose($fp);
}

?>
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
          <span class="section-title">Thank you so much</span><span class="section-title__white section-title-ja text-center">入力ありがとうございます</span></h2>
  </div>
  <div class="text-center contents-box">
    <p style="padding:20px 0 20px;">入力ありがとうございます</p>
    <form action="show_enq.php" method="post">
      <p><input type="submit" value="結果を見る" /></p>
    </form>
  <div>
</body>
</html>
