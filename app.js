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


//when a photo is clicked on photos page that picture and it's src or url is displayed
//in the bigPic page.

$('.photo-wrapper img').click(function() {
  // event.defaultPrevent();
  var imageSrc = $(this).attr('src');
  $('.bigPic img').attr('src', imageSrc);

});

//when a certain album is clicked all the photos on the photos page will turn their sources
//into the corresponding src attribute
$('.albumSnow-wrapper').click(function() {
  event.preventDefault();
  $('#snow').siblings('ul').addClass('hidden');
  $('#snow').removeClass('hidden');
});
$('.albumSurf-wrapper').click(function() {
  event.preventDefault();
  $('#surfing').siblings('ul').addClass('hidden');
  $('#surfing').removeClass('hidden');
});
$('.albumDogs-wrapper').click(function() {
  event.preventDefault();
  $('#dogs').siblings('ul').addClass('hidden');
  $('#dogs').removeClass('hidden');
});
$('.albumSunsets-wrapper').click(function() {
  event.preventDefault();
  $('#sunsets').siblings('ul').addClass('hidden');
  $('#sunsets').removeClass('hidden');
});
$('.albumTropics-wrapper').click(function() {
  event.preventDefault();
  $('#tropics').siblings('ul').addClass('hidden');
  $('#tropics').removeClass('hidden');
});
$('.albumFood-wrapper').click(function() {
  event.preventDefault();
  $('#food').siblings('ul').addClass('hidden');
  $('#food').removeClass('hidden');
});

// var snowImages = {
//   snow1: "file:///Users/Home/theIronYardAssignments/jQueryPhotoAlbum/images/snow1.jpg",
//   snow2: "file:///Users/Home/theIronYardAssignments/jQueryPhotoAlbum/images/snow2.jpg"
// }



























})
