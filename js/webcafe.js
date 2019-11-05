var menu_item = $('.menu > li');
var btn_menu = $('.menu > li > a');
var sub_link = $('.sub-menu a');

menu_item.addClass('menu-item');
btn_menu.addClass('btn-menu');
// sub_link.attr('class', 'icon-dot-circled');
sub_link.addClass('icon-dot-circled');

btn_menu.click(function(e){
  var current_class = $(this).parent().hasClass('menu-act');
  e.preventDefault();
  menu_item.removeClass('menu-act'); //menu-act가 많을 경우에는 성능관점에서는 안좋다.
  // $(this).parent().addClass('menu-act'); toggle 기능 구현
  if(current_class) {
    $(this).parent().removeClass('menu-act');
  }else {
    $(this).parent().addClass('menu-act');
  }

});
