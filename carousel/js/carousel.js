
$(document).ready( function() {
 new carousel().initialize();
});

function carousel() {
  this.initialize= function(){
    var currentImage = 0;
    $('.carousel img').eq(0).show();
    setInterval(function() { imageHide((++currentImage) % $('.carousel img').length); }, 3000);
  };
  
  function imageShow(currentImage) {
    $('.carousel img').eq(currentImage).show();
  };

  function imageHide(currentImage) {
    $('.carousel img').eq(currentImage-1).hide();
    setTimeout(function() { imageShow(currentImage);});
  };
  
}; 
