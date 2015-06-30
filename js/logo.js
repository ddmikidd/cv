//IIFE:This is self executing/invoking function
(function(){
  //document ready
  $(function() {
    
    //Create a new Image object
    var logoImage = new Image();
    logoImage.src = "images/miki_logo_sprite.png";

    function gameLoop() {
      window.requestAnimationFrame(gameLoop);

      setTimeout(function(){
        logo.update();
      }, 2000);
      logo.render();
    }

    //Define the sprite object and invoke the object
    function sprite(options) {
      var that = {},
          frameIndex = 0,
          tickCount = 0
          ticksPerFrame = options.ticksPerFrame || 0,
          numberOfFrames = options.numberOfFrames || 1;

      that.context = options.context;
      that.width = options.width;
      that.height = options.height;
      that.image = options.image;

      //Update the frameIndex
      that.update = function() {
        tickCount += 1;

        if (tickCount > ticksPerFrame) {
          tickCount = 0;
          if (frameIndex < numberOfFrames - 1) {
            frameIndex += 1;
          } else {
            frameIndex = 0;
          }
        }
      };

      //drawImage method render section of the image
      //to the canvas
      that.render = function() {
        //Clear the canvas
        that.context.clearRect(0, 0, that.width, that.height);

        that.context.drawImage(
          that.image,
          frameIndex * that.width/ numberOfFrames,
          0,
          that.width/ numberOfFrames,
          that.height,
          0,
          0,
          that.width/ numberOfFrames,
          that.height);
      };

      return that;
    }

    var canvas = document.getElementById("logoAnimation");
    canvas.width = 182;
    canvas.height = 48;

    var logo = sprite({
      context: canvas.getContext("2d"),
      width: 1456,
      height: 48,
      image: logoImage,
      numberOfFrames: 8,
      ticksPerFrame: 13
    });

    logoImage.addEventListener("load", gameLoop);
  });
}());