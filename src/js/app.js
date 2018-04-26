$('.switch_box1').click(function(){ 
  $('.switch_box1').addClass('active');
  $('.switch_box2').removeClass('active');
  $('.switch_box3').removeClass('active');

  setTimeout(function(){
    $('.msg_one').addClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_two').addClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_three').addClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_four').addClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
  }, 0);
  var wait = setTimeout(function(){
    $('.msg_one').removeClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_two').removeClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_three').removeClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
    $('.msg_four').removeClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
  }, 3500);
  return false;
});
  
  $('.switch_box2').click(function(){
    $('.switch_box2').addClass('active');
    $('.switch_box1').removeClass('active');
    $('.switch_box3').removeClass('active');

    setTimeout(function(){
      $('.msg_one').addClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_two').addClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_three').addClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_four').addClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
    }, 0);
    var wait = setTimeout(function(){
      $('.msg_one').removeClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_two').removeClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_three').removeClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_four').removeClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
    }, 3500);
    return false;
  });

  $('.switch_box3').click(function(){
    $('.switch_box3').addClass('active');
    $('.switch_box1').removeClass('active');
    $('.switch_box2').removeClass('active');

    setTimeout(function(){
      $('.msg_one').addClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_two').addClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_three').addClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_four').addClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
    }, 0);
    var wait = setTimeout(function(){
      $('.msg_one').removeClass('msg_one_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_two').removeClass('msg_two_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_three').removeClass('msg_three_anim ' + 'animated ' + 'fadeInDown');
      $('.msg_four').removeClass('msg_four_anim ' + 'animated ' + 'fadeInDown');
    }, 3500);
    return false;
  });

 