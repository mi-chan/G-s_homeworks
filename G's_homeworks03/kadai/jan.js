/*  まだてきとうなので、さらに分岐の中身を詳細化する予定
    もしかしたら、しないかも  */

$(function(){

  var bool = Boolean(false);

O_hands = [
  "グー",
  "チョキ",
  "パー"
];

var M_point = 0; //自分の得点（セレクタのM_pointとは名前が同じだが別物）
var O_point = 0; //相手の得点

$("[name=ja]").on("click",function(){
    var M_hand = $(this).val(); //ボタンのvalueを取得（グー、チョキ、パー）

    O_hand =O_hands[Math.floor(Math.random() * O_hands.length)]; //配列の番号をランダムに取得し、代入
    $('#hand').text(O_hand);
    console.log(bool);
    console.log(M_hand);
    console.log(O_hand);
if (M_hand == O_hand && bool == false && M_point==0){ //分岐については(ry
  $('#boss').text('あいこです');
}
else if (M_hand == "グー" && O_hand =="チョキ"){
  bool = true;
  $('#boss').text('主導権はあなたです');
}
else if (M_hand == "グー" && O_hand =="パー"){
  bool = false;
  $('#boss').text('主導権は相手です');
}
else if (M_hand == "チョキ" && O_hand =="パー"){
  bool = true;
  $('#boss').text('主導権はあなたです');
}
else if (M_hand == "チョキ" && O_hand =="グー"){
  bool = false;
  $('#boss').text('主導権はあいてです');
}
else if (M_hand == "パー" && O_hand =="グー"){
  bool = true;
  $('#boss').text('主導権はあなたです');
}
else if (M_hand == "パー" && O_hand =="チョキ"){
  bool = false;
  $('#boss').text('主導権はあいてです');
}
else if (M_hand == O_hand && bool == true){
  M_point++;
  $('#M_point').text(M_point);
  $('#O_point').text(O_point);
  console.log(M_point);
  console.log(O_point);
  if(M_point == 5){
    $('#M_point').text("あなたの勝ちです");
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
  }
}

});










});
