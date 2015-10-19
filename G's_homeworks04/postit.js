$(function() {

var comments = [
  "忙しそうね",
  "いろいろあるのね〜",
  '暇人ねー',
  'お話しましょうよ',
  '詰め込み過ぎは良くないわよ',
  '眠いわ',
  'んー',
  'ぺたぺた貼りすぎ'
];

var on_comments = [
  "重ねないでー",
  "かぶせないでよ！",
  'おこるわよ'
];

$('#tabdemo1').tabs({
  show:{effect:"drop"}
});

$('#tabdemo1').tabs({
  hide:{effect:"drop"}
});

$('#clear').click(function() {
  if(confirm('すべての付箋を消します、よろしいですか？')){
    localStorage.clear();
    location.reload();
	}
	else{
		alert('キャンセルされました');
	}
});

  $('#new01').click(function() {
    make01();
    save01();
  });
  $('#new02').click(function() {
    make02();
    save02();
  });
  $('#new03').click(function() {
    make03();
    save03();
  });
  $('#new04').click(function() {
    make04();
    save04();
  });
  $('#new05').click(function() {
    make05();
    save05();
  });
  $('#new06').click(function() {
    make06();
    save06();
  });
  $('#new07').click(function() {
    make07();
    save07();
  });
  $('#new08').click(function() {
    make08();
    save08();
  });
  $('#new09').click(function() {
    make09();
    save09();
  });
  $('#new10').click(function() {
    make10();
    save10();
  });
  $('#new11').click(function() {
    make11();
    save11();
  });
  $('#new12').click(function() {
    make12();
    save12();
  });

  $('#del01').click(function() {
    $('.selected').remove();
    save01();
  });
  $('#del02').click(function() {
    $('.selected').remove();
    save02();
  });
  $('#del03').click(function() {
    $('.selected').remove();
    save03();
  });
  $('#del04').click(function() {
    $('.selected').remove();
    save04();
  });
  $('#del05').click(function() {
    $('.selected').remove();
    save05();
  });
  $('#del06').click(function() {
    $('.selected').remove();
    save06();
  });
  $('#del07').click(function() {
    $('.selected').remove();
    save07();
  });
  $('#del08').click(function() {
    $('.selected').remove();
    save08();
  });
  $('#del09').click(function() {
    $('.selected').remove();
    save09();
  });
  $('#del10').click(function() {
    $('.selected').remove();
    save10();
  });
  $('#del11').click(function() {
    $('.selected').remove();
    save11();
  });
  $('#del12').click(function() {
    $('.selected').remove();
    save12();
  });

  function make01() {
    var sticky01 = $('<div class="sticky01 uzura">Drag & Double Click!</div>');
    var current = $('#new01').parent('div').attr('id');
    sticky01.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save01})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save01();
          });
      }).mousedown(function() {
        $('.sticky01').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky01;
  }

  function make02() {
    var sticky02 = $('<div class="sticky02 uzura">Drag & Double Click!</div>');
    var current = $('#new02').parent('div').attr('id');
    sticky02.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save02})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save02();
          });
      }).mousedown(function() {
        $('.sticky02').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky02;
  }

  function make03() {
    var sticky03 = $('<div class="sticky03 uzura">Drag & Double Click!</div>');
    var current = $('#new03').parent('div').attr('id');
    sticky03.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save03})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save03();
          });
      }).mousedown(function() {
        $('.sticky03').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky03;
  }

  function make04() {
    var sticky04 = $('<div class="sticky04 uzura">Drag & Double Click!</div>');
    var current = $('#new04').parent('div').attr('id');
    sticky04.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save04})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save04();
          });
      }).mousedown(function() {
        $('.sticky04').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky04;
  }

  function make05() {
    var sticky05 = $('<div class="sticky05 uzura">Drag & Double Click!</div>');
    var current = $('#new05').parent('div').attr('id');
    sticky05.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save05})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save05();
          });
      }).mousedown(function() {
        $('.sticky05').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky05;
  }

  function make06() {
    var sticky06 = $('<div class="sticky06 uzura">Drag & Double Click!</div>');
    var current = $('#new06').parent('div').attr('id');
    sticky06.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save06})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save06();
          });
      }).mousedown(function() {
        $('.sticky06').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky06;
  }

  function make07() {
    var sticky07 = $('<div class="sticky07 uzura">Drag & Double Click!</div>');
    var current = $('#new07').parent('div').attr('id');
    sticky07.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save07})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save07();
          });
      }).mousedown(function() {
        $('.sticky07').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky07;
  }

  function make08() {
    var sticky08 = $('<div class="sticky08 uzura">Drag & Double Click!</div>');
    var current = $('#new08').parent('div').attr('id');
    sticky08.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save08})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save08();
          });
      }).mousedown(function() {
        $('.sticky08').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky08;
  }

  function make09() {
    var sticky09 = $('<div class="sticky09 uzura">Drag & Double Click!</div>');
    var current = $('#new09').parent('div').attr('id');
    sticky09.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save09})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save09();
          });
      }).mousedown(function() {
        $('.sticky09').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky09;
  }

  function make10() {
    var sticky10 = $('<div class="sticky10 uzura">Drag & Double Click!</div>');
    var current = $('#new10').parent('div').attr('id');
    sticky10.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save10})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save10();
          });
      }).mousedown(function() {
        $('.sticky10').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky10;
  }

  function make11() {
    var sticky11 = $('<div class="sticky11 uzura">Drag & Double Click!</div>');
    var current = $('#new11').parent('div').attr('id');
    sticky11.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save11})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save11();
          });
      }).mousedown(function() {
        $('.sticky11').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky11;
  }

  function make12() {
    var sticky12 = $('<div class="sticky12 uzura">Drag & Double Click!</div>');
    var current = $('#new12').parent('div').attr('id');
    sticky12.appendTo('#' + current)
      .css('background-color', $('#color').val())
      .draggable({stop: save12})
      .dblclick(function() {
        $(this).html('<textarea>' + $(this).html() + '</textarea>')
          .children()
          .focus()
          .blur(function() {
            $(this).parent().html($(this).val());
            save12();
          });
      }).mousedown(function() {
        $('.sticky12').removeClass('selected');
        $(this).addClass('selected');
      });
    return sticky12;
  }

  function save01() {
    var items = [];
    $('.sticky01').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky01 = JSON.stringify(items);
    var now = $('.sticky01').offset();
    var val = $('#maki > img').offset();
console.log(now);
if(now.top >= val.top && now.left >= val.left){
  $(".fbox").css('visibility', 'visible');
  $('#fuki p').text(on_comments[Math.floor(Math.random() * on_comments.length)]);
}else{
    $(".fbox").css('visibility', 'visible');
    $('#fuki p').text(comments[Math.floor(Math.random() * comments.length)]);
  }
    setTimeout(function(){
    $(".fbox").css('visibility', 'hidden');
  },10000);
  }

  function save02() {
    var items = [];
    $('.sticky02').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky02 = JSON.stringify(items);
  }

  function save03() {
    var items = [];
    $('.sticky03').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky03 = JSON.stringify(items);
  }

  function save04() {
    var items = [];
    $('.sticky04').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky04 = JSON.stringify(items);
  }

  function save05() {
    var items = [];
    $('.sticky05').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky05 = JSON.stringify(items);
  }

  function save06() {
    var items = [];
    $('.sticky06').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky06 = JSON.stringify(items);
  }

  function save07() {
    var items = [];
    $('.sticky07').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky07 = JSON.stringify(items);
  }

  function save08() {
    var items = [];
    $('.sticky08').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky08 = JSON.stringify(items);
  }

  function save09() {
    var items = [];
    $('.sticky09').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky09 = JSON.stringify(items);
  }

  function save10() {
    var items = [];
    $('.sticky10').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky10 = JSON.stringify(items);
  }

  function save11() {
    var items = [];
    $('.sticky11').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky11 = JSON.stringify(items);
  }

  function save12() {
    var items = [];
    $('.sticky12').each(function() {
      items.push({
        css: {
          left: $(this).css('left'),
          top: $(this).css('top'),
          backgroundColor: $(this).css('background-color')
        },
        html: $(this).html()
      });
    });
    localStorage.sticky12 = JSON.stringify(items);
  }

    function load01() {
      if (!localStorage.sticky01) return;
      var items = JSON.parse(localStorage.sticky01);
      $.each(items, function(i, item) {
        make01().css(item.css).html(item.html);
      });
    }

    function load02() {
      if (!localStorage.sticky02) return;
      var items = JSON.parse(localStorage.sticky02);
      $.each(items, function(i, item) {
        make02().css(item.css).html(item.html);
      });
    }

    function load03() {
      if (!localStorage.sticky03) return;
      var items = JSON.parse(localStorage.sticky03);
      $.each(items, function(i, item) {
        make03().css(item.css).html(item.html);
      });
    }

    function load04() {
      if (!localStorage.sticky04) return;
      var items = JSON.parse(localStorage.sticky04);
      $.each(items, function(i, item) {
        make04().css(item.css).html(item.html);
      });
    }

    function load05() {
      if (!localStorage.sticky05) return;
      var items = JSON.parse(localStorage.sticky05);
      $.each(items, function(i, item) {
        make05().css(item.css).html(item.html);
      });
    }

    function load06() {
      if (!localStorage.sticky06) return;
      var items = JSON.parse(localStorage.sticky06);
      $.each(items, function(i, item) {
        make06().css(item.css).html(item.html);
      });
    }

    function load07() {
      if (!localStorage.sticky07) return;
      var items = JSON.parse(localStorage.sticky07);
      $.each(items, function(i, item) {
        make07().css(item.css).html(item.html);
      });
    }

    function load08() {
      if (!localStorage.sticky08) return;
      var items = JSON.parse(localStorage.sticky08);
      $.each(items, function(i, item) {
        make08().css(item.css).html(item.html);
      });
    }

    function load09() {
      if (!localStorage.sticky09) return;
      var items = JSON.parse(localStorage.sticky09);
      $.each(items, function(i, item) {
        make09().css(item.css).html(item.html);
      });
    }

    function load10() {
      if (!localStorage.sticky10) return;
      var items = JSON.parse(localStorage.sticky10);
      $.each(items, function(i, item) {
        make10().css(item.css).html(item.html);
      });
    }

    function load11() {
      if (!localStorage.sticky11) return;
      var items = JSON.parse(localStorage.sticky11);
      $.each(items, function(i, item) {
        make11().css(item.css).html(item.html);
      });
    }

    function load12() {
      if (!localStorage.sticky12) return;
      var items = JSON.parse(localStorage.sticky12);
      $.each(items, function(i, item) {
        make12().css(item.css).html(item.html);
      });
    }
  load01();
  load02();
  load03();
  load04();
  load05();
  load06();
  load07();
  load08();
  load09();
  load10();
  load11();
  load12();
});
