$(function(){
  $('.scrolls').click(function(){
    let speed=2000;
    let type='swing';
    let href=$(this).attr('href');
    let target=$(href=="#index" ? 'html' : href);
    let position=target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });
});