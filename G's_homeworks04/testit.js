$(function() {
  $('#tabdemo1').tabs();

  $('#new01,#new02,#new03').click(function() {
    var current = $(this).parent('div').attr('id');

    if(current = "tab-test01"){
    make01(current);
    save01(current);
  }else if(current = "tab-test02"){
    make02(current);
    save02(current);
  }else if(current = "tab-test03"){
    make03(current);
    save03(current);
  }
  });

  $('#del01,#del02,#del03').click(function() {
    $('.selected').remove();
    save();
  });

  function make01(current) {
    var sticky01 = $('<div class="sticky01">Drag & Double Click!</div>');
    console.log(current);
    sticky01.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save01(current)})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save01(current);
          });
      }).mousedown(function() {
        $('.sticky01').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky01;
  }

  function make02(current) {
    var sticky02 = $('<div class="sticky02">Drag & Double Click!</div>');
    console.log(current);
    sticky02.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save02(current)})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save02(current);
          });
      }).mousedown(function() {
        $('.sticky02').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky02;
  }

  function make03(current) {
    var sticky03 = $('<div class="sticky03">Drag & Double Click!</div>');
    console.log(current);
    sticky03.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save03(current)})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save03(current);
          });
      }).mousedown(function() {
        $('.sticky03').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky03;
  }

  function save01(current) {
    // console.log(current);
    var items = [];
    $('.sticky01').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html(),
        c: current
      });
      console.log(current);
    });
    localStorage.sticky = JSON.stringify(items);
  }

  function save02(current) {
    // console.log(current);
    var items = [];
    $('.sticky02').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html(),
        c: current
      });
      console.log(current);
    });
    localStorage.sticky = JSON.stringify(items);
  }

  function save03(current) {
    // console.log(current);
    var items = [];
    $('.sticky03').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html(),
        c: current
      });
      console.log(current);
    });
    localStorage.sticky = JSON.stringify(items);
  }

  function load01() {
    if (!localStorage.sticky01) return;
    var items = JSON.parse(localStorage.sticky);
    $.each(items, function(i, item) {
      console.log(item.c);
      make01(item.c).css(item.css).html(item.html);
    });
  }

  function load02() {
    if (!localStorage.sticky02) return;
    var items = JSON.parse(localStorage.sticky);
    $.each(items, function(i, item) {
      console.log(item.c);
      make02(item.c).css(item.css).html(item.html);
    });
  }

  function load03() {
    if (!localStorage.sticky03) return;
    var items = JSON.parse(localStorage.sticky);
    $.each(items, function(i, item) {
      console.log(item.c);
      make03(item.c).css(item.css).html(item.html);
    });
  }

  load01();
  load02();
  load03();
});
