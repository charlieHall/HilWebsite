$(function () {
                

  var $menu = $('.sidebarMenu');
  var $container = $('.container');
  var left = $menu.offset().left;
  var containerLeft = $container.offset().left;
  var containerRight = $container.offset().right;
  var $button = $('#menuButton');
  var $closeButton = $('#closeButton');

  $('#menuButton').click(function () {

    $menu.css({left:left}).animate({"left":"0px"}, "slow")
    $container.css({left:containerLeft, right:containerRight}).animate({"left":"500px", "right": "-500px"}, "slow")
    $button.css({opacity:1}).animate({"opacity":"0"}, function() {
        $button.hide()
    })
    $closeButton.show().css({opacity:0}).animate({"opacity":"1"})
      
  
    });
                
  $('#closeButton').click(function () {

    $menu.css({left:"0px"}).animate({"left":"-500px"}, "slow")
    $container.css({left:"500px", right:"-500px"}).animate({"left":"0px", "right":"0px"}, "slow")
    $button.show().css({opacity:0}).animate({"opacity":"1"})
    $closeButton.css({opacity:1}).animate({"opacity":"0"}, function() {
        $closeButton.hide()
    })
    
  
    });
                
  $('#closeClick').click(function () {

    $menu.css({left:"0px"}).animate({"left":"-500px"}, "slow")
    $container.css({left:"500px", right:"-500px"}).animate({"left":"0px", "right":"0px"}, "slow")
    $button.show().css({opacity:0}).animate({"opacity":"1"})
    $closeButton.css({opacity:1}).animate({"opacity":"0"}, function() {
        $closeButton.hide()
    })
    
    });
    
  $( window ).scroll(function() {
      if ($('#menuButton').is(":hidden")) {
            $menu.css({left:"0px"}).animate({"left":"-500px"}, "slow")
            $container.css({left:"500px", right:"-500px"}).animate({"left":"0px", "right":"0px"}, "slow")
            $button.show().css({opacity:0}).animate({"opacity":"1"})
            $closeButton.css({opacity:1}).animate({"opacity":"0"}, function() {
                $closeButton.hide()
            });
    
        };
    });

});