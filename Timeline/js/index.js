var
cursor = $(".cursor"),
cWidth = 20, 
mouseX = 0, 
mouseY = 0; 

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
  
    left: mouseX - (cWidth / 2),
    top: mouseY - (cWidth / 2)
  })
});