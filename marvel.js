$(document).ready(function(){
    $('.sidenav').sidenav();
  });
 
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
   
  });
  $('.carousel').carousel({
    indicators: true
  });
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })      
  