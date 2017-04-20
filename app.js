$(document).ready(function() {

  var box = $('.box');
  var reset = $('#reset');
  var color = 'white';
  var colors = "red green blue yellow white";
  var white = $('#white');
  var red = $("#red");
  var green = $("#green");
  var blue = $("#blue");
  var yellow = $("#yellow");
  var isClicked = false;


box.on('mousedown', function (event){
  if(event.which === 1) {
    isClicked = true;
  } else if (event.which === 3) {
    box.on('mouseover', function() {
      $('this').removeClass(colors);
    })
  }
})


box.on('mouseup', function (){
  isClicked = false;
})


box.on('mouseover', function(event) {
  if(isClicked) {
    $(this).addClass(color);
}})

box.on('dblclick', function(event) {
  $(this).removeClass(colors);
})

white.on('click', function(event) {
  color = 'white';
})

red.on('click', function(event) {
  color = "red";
})

blue.on('click', function(event) {
  color = "blue";
})

green.on('click', function(event) {
  color = "green";
})

yellow.on('click', function(event) {
  color = "yellow";
})


reset.on('click', function() {
  box.removeClass(colors);
})




















});
