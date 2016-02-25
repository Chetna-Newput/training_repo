$(document).ready( function() {
 new carousel().initialize();
});



function carousel() {
  this.initialize= function(){
    var currentImage = 0;
    $('.carousel img').eq(0).show();
    setInterval(function() { imageShow((currentImage++) % $('.carousel img').length); }, 3000);
  };
  
  function imageShow(currentImage) {
  $('.carousel img').eq(currentImage).show();
  console.log('show'+currentImage);
  setTimeout(function() { imagehide(currentImage);}, 3000);
  };

  function imagehide(currentImage) {
    $('.carousel img').eq(currentImage).hide();
    console.log('hide');
  };
  
};