<?php
session_start();

$array=array("ほのか"=>0,"うみ"=>0,"ことり"=>0,"まき"=>0,"はなよ"=>0,"りん"=>0,"えり"=>0,"のぞみ"=>0,"にこ"=>0);

function mizuki($name){
  global $array;
  if($name=="ほのか"){
    $array["ほのか"]++;
  }else if($name=="うみ"){
    $array["うみ"]++;
  }else if($name=="ことり"){
    $array["ことり"]++;
  }else if($name=="まき"){
    $array["まき"]++;
  }else if($name=="はなよ"){
    $array["はなよ"]++;
  }else if($name=="りん"){
    $array["りん"]++;
  }else if($name=="えり"){
    $array["えり"]++;
  }else if($name=="のぞみ"){
    $array["のぞみ"]++;
  }else{
    $array["にこ"]++;
  }
}
mizuki($_POST["character"]);
mizuki($_POST["looks"]);
mizuki($_POST["hobby"]);
mizuki($_POST["animal"]);
mizuki($_POST["like"]);
mizuki($_POST["dislike"]);
// var_dump($array);

$HONOKA = array("img/honoka_01.png","img/honoka_02.png","img/honoka_03.png");
$UMI = array("img/umi_01.png","img/umi_02.png","img/umi_03.png");
$KOTORI = array("img/kotori_01.png","img/kotori_02.png","img/kotori_03.png");
$MAKI = array("img/maki_01.png","img/maki_02.png","img/maki_03.png");
$HANAYO = array("img/hanayo_01.png","img/hanayo_02.png","img/hanayo_03.png");
$RIN = array("img/rin_01.png","img/rin_02.png","img/rin_03.png");
$ELI = array("img/eli_01.png","img/eli_02.png","img/eli_03.png");
$NOZOMI = array("img/nozomi_01.png","img/nozomi_02.png","img/nozomi_03.png");
$NICO = array("img/nico_01.png","img/nico_02.png","img/nico_03.png");

$max_key=max($array);

if($array["ほのか"]==$max_key){
  $img_file=$HONOKA[rand(0,2)];
  $char_name="高坂 穂乃果";
  $char_index=0;
}else if($array["うみ"]==$max_key){
  $img_file=$UMI[rand(0,2)];
  $char_name="園田 海未";
  $char_index=1;
}else if($array["ことり"]==$max_key){
  $img_file=$KOTORI[rand(0,2)];
  $char_name="南 ことり";
  $char_index=2;
}else if($array["まき"]==$max_key){
  $img_file=$MAKI[rand(0,2)];
  $char_name="西木野 真姫";
  $char_index=3;
}else if($array["はなよ"]==$max_key){
  $img_file=$HANAYO[rand(0,2)];
  $char_name="小泉 花陽";
  $char_index=4;
}else if($array["りん"]==$max_key){
  $img_file=$RIN[rand(0,2)];
  $char_name="星空 凛";
  $char_index=5;
}else if($array["えり"]==$max_key){
  $img_file=$ELI[rand(0,2)];
  $char_name="絢瀬 絵里";
  $char_index=6;
}else if($array["のぞみ"]==$max_key){
  $img_file=$NOZOMI[rand(0,2)];
  $char_name="東條 希";
  $char_index=7;
}else{
  $img_file=$NICO[random_int(0,2)];
  $char_name="矢澤 にこ";
  $char_index=8;
}
$name=$_POST['name'];
$kana=$_POST['kana'];
$age=$_POST['age'];
$email=$_POST['email'];
$sex=$_POST['sex'];

$_SESSION['name'] =  $name;
$_SESSION['kana'] =  $kana;
$_SESSION['age'] =  $age;
$_SESSION['email'] =  $email;
$_SESSION['sex'] =  $sex;
$_SESSION['index'] =  $char_index;


// var_dump($max_key);

// $tmp = null;
// $checkbox = $_POST["hobby"];
// var_dump($checkbox);
// $res_file = fopen('data/data.csv', 'w+');
//   $ed = file('data/index.txt');
//   for ($i = 0; $i < 5; $i++) $ed[$i] = rtrim($ed[$i]);
//   if ($_POST['submit']) {
//     for($i=0; $i<sizeof($checkbox); $i++){
//     $ed[$checkbox[$i]]++;
//   }
//     $fp = fopen('data/index.txt', 'w');
//     for ($i = 0; $i < 5; $i++) {
//       fwrite($fp, $ed[$i] . "\n");
//     }
//     fclose($fp);
//   }
//
// for($i=0; $i<sizeof($checkbox); $i++){
//   if($checkbox[$i]==0){
//     $checkbox[$i]="イチゴショート";
//   }elseif($checkbox[$i]==1){
//     $checkbox[$i]="モンブラン";
//   }elseif($checkbox[$i]==2){
//     $checkbox[$i]="チーズケーキ";
//   }elseif($checkbox[$i]==3){
//     $checkbox[$i]="レアチーズケーキ";
//   }elseif($checkbox[$i]==4){
//     $checkbox[$i]="ミルフィーユ";
//   }
// }
// for($i=0; $i<sizeof($checkbox); $i++){
//   if($tmp == null){
// $tmp = $tmp . $checkbox[$i];
// }else{
// $tmp = $tmp . " " . $checkbox[$i];
// }
// }
// $array = array('name' => $_POST["name"], 'email' => $_POST["age"], 'sex' => $_POST["email"], 'hobby' => $tmp);
// //var_dump($array);
// fputcsv($res_file, $array);
// fclose($res_file);
// ?>
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
          <span class="section-title">confirm</span><span class="section-title__white section-title-ja text-center">確認画面</span></h2>
  </div>
  <div class="inner contents-box">
    <table class="form-module01">
        <tr>
            <td class="form-text">氏名:</td>
            <td><?php echo $name ?></td>
        </tr>
        <tr>
            <td class="form-text">フリガナ:</td>
            <td><?php echo $kana ?></td>
        </tr>
        <tr>
            <td class="form-text">年齢:</td>
            <td><?php echo $age ?></td>
        </tr>
        <tr>
            <td class="form-text">E-mail:</td>
            <td><?php echo $email ?></td>
        </tr>
        <tr>
            <td class="form-text">性別:</td>
            <td><?php echo $sex ?></td>
        </tr>
      </table>
  </div>

  <div class="text-center contents-box">
  <?php echo "<img src=\"$img_file\" width=\"300px\">" ?>
  <p style="padding:20px 0 20px;">あなたにぴったりなのは<?php echo $char_name ?>です</p>
  <p style="padding:20px 0 20px;">この結果でよろしいですか？</p>
  <form action="input_finish.php" method="post">
    <p><input type="submit" name="submit" value="OK" /></p>
  </form>
  <form action="index.php" method="post">
    <p><input type="submit" name="submit" value="NO" /></p>
  </form>
  <div>
<!-- <?php
echo $_POST["age"];
echo $_POST["email"];
echo $_POST["sex"];
for($i=0; $i<sizeof($checkbox); $i++){
echo "${checkbox[$i]}<br>";
}
?> -->
</body>
</html>
