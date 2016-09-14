$(function () {

  var $panorama = $('.Title');

  var left = $panorama.offset().left;
  var width = $panorama.width();

  $('.Title').mousemove(function (e) {
    var offset = e.pageX - left;
    var percentage = offset / width * 100;

    $panorama.css('background-position', percentage + '% 0', 20%);

  });

});