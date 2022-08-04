var card = $('.card');

$(document).on('mousemove', function(e) {
  var ax = -($(window).width() / 2 - e.pageX) / 30;
  var ay = ($(window).height() / 2 - e.pageY) / 30;
  card.attr('style', 'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg)');
})