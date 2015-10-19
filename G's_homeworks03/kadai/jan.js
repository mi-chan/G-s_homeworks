/*  まだてきとうなので、さらに分岐の中身を詳細化する予定
    もしかしたら、しないかも  */

$(function(){

  $("#title").show(3000);

  var bool = Boolean(false);

O_hands = [
  ["グー","img/goo.gif"],
  ["チョキ","img/choki.gif"],
  ["パー","img/paa.gif"]
];

var M_point = 0; //自分の得点（セレクタのM_pointとは名前が同じだが別物）
var O_point = 0; //相手の得点

$("[name=button]").on("click",function(){

  $('#explanation p').text('せつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめい');
  $('#explanation').css('font-size','20px');
  $('#next').html('<input type = "button" name = "1" value = "next" class = "TTT">');

  $("[name=1]").on("click",function(){

    $('#explanation p').text('せつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめい');
    $('#explanation p').css('font-size','20px');
    $('#next').html('<input type = "button" name = "2" value = "next" class = "TTT">');

    $("[name=2]").on("click",function(){

      $('#explanation p').text('ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ');
      $('#explanation p').css('font-size','20px');
      $('#next').html('<input type = "button" name = "3" value = "next" class = "TTT">');

      $("[name=3]").on("click",function(){
        $('#next').html('<input type = "button" name = "start" value = "スタート！" class = "button lano">');
        $('#explanation p').remove();

        $("[name=start]").on("click",function(){
          $('#next').remove();
          $('#explanation').text('はじまるよ！');


$("[name=ja]").on("click",function(){
    var M_hand = $(this).val(); //ボタンのvalueを取得（グー、チョキ、パー）
    var kari = Math.floor(Math.random() * O_hands.length);
    O_hand =O_hands[kari][0]; //配列の番号をランダムに取得し、代入
    img = $('<img>').attr('src',O_hands[kari][1]);
    $('#GIF').html(img);
    // $('#hand').text(O_hand);
    console.log(bool);
    console.log(M_hand);
    console.log(O_hand);
setTimeout(function(){
if (M_hand == O_hand && bool == false && M_point==0){ //分岐については(ry
  $('#explanation').text('あいこです');
}
else if (M_hand == "グー" && O_hand =="チョキ"){
  bool = true;
  $('#explanation').text('主導権はあなたです');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/goo.png" width = "120px">');
}
else if (M_hand == "グー" && O_hand =="パー"){
  bool = false;
  $('#explanation').text('主導権は相手です');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/goo.png" width = "120px">');
}
else if (M_hand == "チョキ" && O_hand =="パー"){
  bool = true;
  $('#explanation').text('主導権はあなたです');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/choki.png" width = "120px">');
}
else if (M_hand == "チョキ" && O_hand =="グー"){
  bool = false;
  $('#explanation').text('主導権はあいてです');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/choki.png" width = "120px">');
}
else if (M_hand == "パー" && O_hand =="グー"){
  bool = true;
  $('#explanation').text('主導権はあなたです');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/paa.png" width = "120px">');
}
else if (M_hand == "パー" && O_hand =="チョキ"){
  bool = false;
  $('#explanation').text('主導権はあいてです');
  // $("#b").css('visibility', 'visible');
  // $('#b').html('<img src = "img/paa.png" width = "120px">');
}
else if (M_hand == O_hand && bool == true){
  M_point++;
  $('#M_point').text(M_point);
  $('#O_point').text(O_point);
  console.log(M_point);
  console.log(O_point);
  if(M_point == 5){
    $('#M_point').text("あなたの勝ちです");
    $('#explanation').html('<input type = "button" name = "restart" value = "もう一回！" onclick="sss()" class = "button lano">');
  }
}
else if (M_hand == O_hand && bool == false){
  O_point++;
  $('#M_point').text(M_point);
  $('#O_point').text(O_point);
  console.log(M_point);
  console.log(O_point);
  if(O_point == 5){
    $('#O_point').text("相手の勝ちです");
    $('#explanation').html('<input type = "button" name = "restart" value = "もう一回！" onClick="javascript:history.go(0)" class = "button lano">');
  }
}
},8500);
});





});
});
});
});
});
});
