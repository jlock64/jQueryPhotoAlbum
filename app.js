$(document).ready(function(){
// 1. when any album is clicked on homepage it takes us to the
//corresponding album's photos page and the album page and big Pic page is hidden.
// 1.1 when any image is clicked on photos page that image is displayed on bigPic page and
//albums and photos page is hidden.
// 1.2 when the go-back-to album button is pressed page redirects back photos page and bigPic
//and albums page is hidden.

// PAGE NAVIGATION //
$('.album-wrapper, .backToAlbum').click(function(){
  event.preventDefault();
  $('#photos-page').siblings('section').addClass('hidden');
  $('#photos-page').removeClass('hidden');
});
$('.photo-wrapper').click(function(){
  event.preventDefault();
  $('#big-photo-section').siblings('section').addClass('hidden');
  $('#big-photo-section').removeClass('hidden');
});
$('.homeButton').click(function(){
  event.preventDefault();
  $('#homepage').siblings('section').addClass('hidden');
  $('#homepage').removeClass('hidden');
});


//  BIG PICTURE //
$('.photo-wrapper img').click(function() {
  // event.defaultPrevent();
  var imageSrc = $(this).attr('src');
  $('.bigPic img').attr('src', imageSrc);

});

//when a certain album is clicked all the photos on the photos page will turn their sources
//into the corresponding src attribute
$('.albumSurf-wrapper, .button-1').click(function() {
  event.preventDefault();
  $('#surfing').siblings('ul').addClass('hidden');
  $('#surfing').removeClass('hidden');
});
$('.albumSnow-wrapper, .button-2').click(function() {
  event.preventDefault();
  $('#snow').siblings('ul').addClass('hidden');
  $('#snow').removeClass('hidden');
});
$('.albumDogs-wrapper, .button-3').click(function() {
  event.preventDefault();
  $('#dogs').siblings('ul').addClass('hidden');
  $('#dogs').removeClass('hidden');
});
$('.albumSunsets-wrapper, .button-4').click(function() {
  event.preventDefault();
  $('#sunsets').siblings('ul').addClass('hidden');
  $('#sunsets').removeClass('hidden');
});
$('.albumTropics-wrapper, .button-5').click(function() {
  event.preventDefault();
  $('#tropics').siblings('ul').addClass('hidden');
  $('#tropics').removeClass('hidden');
});
$('.albumFood-wrapper, .button-6').click(function() {
  event.preventDefault();
  $('#food').siblings('ul').addClass('hidden');
  $('#food').removeClass('hidden');
});

//when the arrow is clicked the next picture
// $('.octicon-chevron-right').click(function() {
//   $('.bigPic img').attr('alt');
// });



























})
