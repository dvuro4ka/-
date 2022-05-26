$(document).ready(function() {
  AOS.init();
    let checkbox = $('.header-bottom-offer-form-wrap__checkbox');
    let input = $('.header-bottom-offer-form-wrap__checkbox-hidden');

    checkbox.on('click', function () {
      if (input.prop('checked') == true) {
        input.prop('checked', false);
      } else {
        input.prop('checked', true);
      }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".header-top").addClass("fixed");
        } else {
        $(".header-top").removeClass("fixed");
        }
    });

    $("input[name=user-tel]").inputmask("+7(999)999-99-99");

    $('.faq-list-card-top').on('click', function() {
      $(this).toggleClass('active');
    $(this).parent().find('.faq-list-card-bottom').slideToggle();
    });

    $('.reviews-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      
    });

    $('.examples-buttons__button').on('click', function() {
      $('.examples-buttons__button').removeClass('active');
      $('.examples-cases-case').hide();

      let target = $(this).attr('data-target');

      $(this).addClass('active');
      $('.examples-cases-case[data-target='+ target +']').show();
  });

  $('#counter').timer({
    countdown: true,
    duration: '29d 3h 35m',
    format: '%d : %h : %m'
});

$('#counter-second').timer({
  countdown: true,
  duration: '29d 3h 35m',
  format: '%d : %h : %m'
});

$('.header-top__btn').on('click', function() {
  $('.popup-container').show().css('display', 'flex');
});

$('.popup-overlay').on('click', function() {
  $('.popup-container').hide();
});

$('.popup__close').on('click', function() {
  $('.popup-container').hide();
});

$('.popup-form').on('submit', function () {
  let user_name = $(this).find('input[name=user-name]').val();
  let user_tel = $(this).find('input[name=user-tel]').val();

  $.ajax({
      url: "send.php",
      type: "post",
      dataType: "json",
      data: {
          "user_name": user_name,
          "user_tel": user_tel,
      },
      success: function (data) { }
  });

  $('.popup-container').hide();
  ym(82313920,'reachGoal','submit-order');
  $(this)[0].reset();
  return false;
});

$('.header-bottom-offer').on('submit', function () {
  let user_name = $(this).find('input[name=user-name]').val();
  let user_tel = $(this).find('input[name=user-tel]').val();

  $.ajax({
      url: "send.php",
      type: "post",
      dataType: "json",
      data: {
          "user_name": user_name,
          "user_tel": user_tel,
      },
      success: function (data) { }
  });

  ym(82313920,'reachGoal','submit-order');
  $(this)[0].reset();
  return false;
});


});