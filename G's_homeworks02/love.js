$(function(){

var name = new Array();

var HONOKA = [
  "img/honoka_01.png",
  "img/honoka_02.png",
  "img/honoka_03.png"
];

var UMI = [
  "img/umi_01.png",
  "img/umi_02.png",
  "img/umi_03.png"
];

var KOTORI = [
  "img/kotori_01.png",
  "img/kotori_02.png",
  "img/kotori_03.png"
];

var MAKI = [
  "img/maki_01.png",
  "img/maki_02.png",
  "img/maki_03.png"
];

var HANAYO = [
  "img/hanayo_01.png",
  "img/hanayo_02.png",
  "img/hanayo_03.png"
];

var RIN = [
  "img/rin_01.png",
  "img/rin_02.png",
  "img/rin_03.png"
];

var ELI = [
  "img/eli_01.png",
  "img/eli_02.png",
  "img/eli_03.png"
];

var NOZOMI = [
  "img/nozomi_01.png",
  "img/nozomi_02.png",
  "img/nozomi_03.png"
];

var NICO = [
  "img/nico_01.png",
  "img/nico_02.png",
  "img/nico_03.png"
];

$('.bxslider').bxSlider({
  mode:'fade',
  speed: 500,
  auto: true,
  pause: 5000,
  captions: true
});

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
var member = [
  ["Honoka",0],
  ["Umi",0],
  ["Kotori",0],
  ["Maki",0],
  ["Hanayo",0],
  ["Rin",0],
  ["Eli",0],
  ["Nozomi",0],
  ["Nico",0]
];

for(var i=0; i<6; i++){
/*　name[]  0...性格
            1...容姿
            2...趣味
            3...動物
            4...好き
            5...嫌い　*/
  if(name[i] == "ほのか"){
    member[0][1]++;
  }else if(name[i] == "うみ"){
    member[1][1]++;
  }else if(name[i] == "ことり"){
    member[2][1]++;
  }else if(name[i] == "まき"){
    member[3][1]++;
  }else if(name[i] == "はなよ"){
    member[4][1]++;
  }else if(name[i] == "りん"){
    member[5][1]++;
  }else if(name[i] == "えり"){
    member[6][1]++;
  }else if(name[i] == "のぞみ"){
    member[7][1]++;
  }else if(name[i] == "にこ"){
    member[8][1]++;
  }
}
var result = member.sort(function(a,b){return(b[1] - a[1]);});
console.log(result);

if(result[0][1] == result[1][1]){
  // エラー処理
  $("#results").html('<img src="img/err.jpg" width = 600px title="エラー"/>');
  $('#answer p').remove();
}else if(result[0][0] == "Honoka"){
  // 画像表示
  img = $('<img id = "img" width = 600px>').attr('src',HONOKA[Math.floor(Math.random() * HONOKA.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「高坂穂乃果」です。</p>');
  $('#answer p').css('color','#EF810F');
}else if(result[0][0] == "Umi"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',UMI[Math.floor(Math.random() * UMI.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「園田海未」です。</p>');
  $('#answer p').css('color','#006FAB');
}else if(result[0][0] == "Kotori"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',KOTORI[Math.floor(Math.random() * KOTORI.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「南ことり」です。</p>');
  $('#answer p').css('color','#9C9C9C');
}else if(result[0][0] == "Maki"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',MAKI[Math.floor(Math.random() * MAKI.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「西木野真姫」です。</p>');
  $('#answer p').css('color','#DF3447');
}else if(result[0][0] == "Hanayo"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',HANAYO[Math.floor(Math.random() * HANAYO.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「小泉花陽」です。</p>');
  $('#answer p').css('color','#97B64D');
}else if(result[0][0] == "Rin"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',RIN[Math.floor(Math.random() * RIN.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「星空凛」です。</p>');
  $('#answer p').css('color','#F4D500');
}else if(result[0][0] == "Eli"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',ELI[Math.floor(Math.random() * ELI.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「絢瀬絵理」です。</p>');
  $('#answer p').css('color','#009CD1');
}else if(result[0][0] == "Nozomi"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',NOZOMI[Math.floor(Math.random() * NOZOMI.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「東條希」です。</p>');
  $('#answer p').css('color','#714C99');
}else if(result[0][0] == "Nico"){
  // 画像表示
  img = $('<img width = 600px>').attr('src',NICO[Math.floor(Math.random() * NICO.length)]);
  $('#results').html(img);
  $('#answer').html('<p>あなたにぴったりなのは<br>「矢澤にこ」です。</p>');
  $('#answer p').css('color','#EE8EA0');
}
});














});
