$(document).ready(function () {
  $('.list-group-item').click(function () {
    $(this).parent().find('.list-group-item').removeClass('active');
    $(this).addClass('active');

    var litt1 = $(this).parents('.testt').find('.free').children('.active');
    if (litt1.length > 0) {
      $(this).prop('disabled', false);
      $('.send').prop('disabled', false);
      $('.busy').css('pointer-events', 'none');
    } else {
      $(this).prop('disabled', true);
      $('.send').prop('disabled', true);
      $('.busy').css('pointer-events', 'auto');
    }

    var litt2 = $(this).parents('.testt').find('.busy').children('.active');
    if (litt2.length > 0) {
      $(this).prop('disabled', false);
      $('.revoke').prop('disabled', false);
      $('.free').css('pointer-events', 'none');
    } else {
      $(this).prop('disabled', true);
      $('.revoke').prop('disabled', true);
      $('.free').css('pointer-events', 'auto');
    }
  });

  $('.send').click(function () {
    var thing1 = $(this).parents('.testt').find('.free').children('.active');
    if (thing1.length > 0) {
      $('.free .list-group-item.active').appendTo('.list-group.busy');
      $('.send').prop('disabled', true);
      $('.revoke').prop('disabled', true);
      $('.busy .list-group-item.active').removeClass('active');
    }
    $('.busy').css('pointer-events', 'auto');
  });

  $('.revoke').click(function () {
    var thing2 = $(this).parents('.testt').find('.busy').children('.active');
    if (thing2.length > 0) {
      $('.busy .list-group-item.active').appendTo('.free');
      $('.revoke').prop('disabled', true);
      $('.send').prop('disabled', true);
      $('.free .list-group-item.active').removeClass('active');
    }
    $('.free').css('pointer-events', 'auto');
  });
  $('.dab').click(function () {
    $('body').toggleClass('dark-mode');
    $('.dab').toggleClass('bttt');
    $('.testt').toggleClass('darktest');
    $('.list-group').toggleClass('ldarkm');
    $('.list-group-item').toggleClass('ldark');
  });
});
