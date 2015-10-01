$(function(){

var name = Array();


$("[name=character]").on("click",function(){
  name[0] = $("[name=character]:checked").val();

  // if(name[0] == "ほのか"){
  //
  // }
  // alert(name[0]);
  console.log(name[0]);
});

$("[name=looks]").on("click",function(){
  name[1] = $("[name=looks]:checked").val();
  // alert(name[1]);
  console.log(name[1]);
});

$("[name=hobby]").on("click",function(){
  name[2] = $("[name=hobby]:checked").val();
  // alert(name[2]);
  console.log(name[2]);
});

$("[name=animal]").on("click",function(){
  name[3] = $("[name=animal]:checked").val();
  // alert(name[3]);
  console.log(name[3]);
});

$("[name=like]").on("click",function(){
  name[4] = $("[name=like]:checked").val();
  // alert(name[4]);
  console.log(name[4]);
});

$("[name=dislike]").on("click",function(){
  name[5] = $("[name=dislike]:checked").val();
  // alert(name[5]);
  console.log(name[5]);
});

$("#button").on("click",function(){
var member = Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
/*　member[]  0...ほのか
              1...うみ
              2...ことり
              3...まき
              4...はなよ
              5...りん
              6...えり
              7...のぞみ
              8...にこ　*/

for(var i=0; i<6; i++){
/*　name[]  0...性格
            1...容姿
            2...趣味
            3...動物
            4...好き
            5...嫌い　*/
  if(name[i] == "ほのか"){
    member[0]++;
  }else if(name[i] == "うみ"){
    member[1]++;
  }else if(name[i] == "ことり"){
    member[2]++;
  }else if(name[i] == "まき"){
    member[3]++;
  }else if(name[i] == "はなよ"){
    member[4]++;
  }else if(name[i] == "りん"){
    member[5]++;
  }else if(name[i] == "えり"){
    member[6]++;
  }else if(name[i] == "のぞみ"){
    member[7]++;
  }else if(name[i] == "にこ"){
    member[8]++;
  }
}
// console.log(member)

console.log(jQuery.inArray(Math.max.apply(null,member), member));
});














});
