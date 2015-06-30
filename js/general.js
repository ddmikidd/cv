//IIFE
(function(){
  //$(document).ready shorthand
  //will wait until the DOM is ready before any code is executed
  $(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() > 20) {
            $('.layoutLogo').fadeOut();
            $('.layoutHeader').addClass('scroll');
            $('.layoutHeader--nav').addClass('scroll');
        } else {
            $('.layoutLogo').fadeIn();
            $('.layoutHeader').removeClass('scroll');
            $('.layoutHeader--nav').removeClass('scroll');
        }
        var projectPosition = document.getElementById("project").getBoundingClientRect();
        if(projectPosition.bottom < 480) {
          $(".project").addClass("visible");
          $(".projectBoxContainer").addClass("active");
        } else {
          $(".project").removeClass("visible");
        }
    });

    $("body").addClass("loaded");

    function filterPath(string) {
      //replace(/^\//,'') - this is to strip # tag
      //replace(/\/$/,'') - search for slash and strip them
      return string.replace(/^\//, '')
                   .replace(/\/$/,'');
    }

    //
    ////Animation Scroll
    //
    //If click links which have # in href
    $('a[href*=#]').click(function(){
    //Check if the link is pointing to hte same page
    //location.pathname - after the / of the url
    //location.hostname - check if it's pointing to the same domain  
      if( filterPath(location.pathname) === filterPath(this.pathname)
      && location.hostname === this.hostname
      && this.hash.replace(/#/,'') ) {
        //location.hash return the anchor part of a url
        var targetId = $(this.hash);
        var $target = targetId.length ? targetId : false;

        if($target) {
          var targetOffset = $target.offset().top - 100;
          $('html, body').animate({scrollTop: targetOffset}, 500);
            return false;
        }
      }   
    });
  });
})();  