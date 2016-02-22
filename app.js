$(document).ready(function(){

// PAGE NAVIGATION //
$('.album-wrapper, .backToAlbum').click(function(){
  event.preventDefault();
  $('#photos-page').siblings('section').addClass('hidden');
  $('#photos-page').removeClass('hidden');
  $('.section-holder').css({
    'background-color': '#ccc',
    'opacity': '1'
  });
  $('footer').css('display', 'block');
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


//  BIG PICTURE and TITLE//
$('.photo-wrapper').on('click', 'img', function() {
  // event.defaultPrevent();
  var imageName = $(this).attr('title');
  var imageSrc = $(this).attr('src');
  $('.bigPic img').attr('src', imageSrc);
  $('.photoNumber h1').text(imageName).css({
    'text-transform': 'uppercase',
    'color': '#fff'
  });
  $('.section-holder').css({
    'background-color': '#000',
    'opacity': '0.9'
  });
  $('footer').css('display', 'none');
});


// when the arrow is clicked the next picture
$('.octicon-chevron-right').click(function() {
  var bigPicSrc = $('.bigPic img').attr('src');

});




// ALBUM PICTURES //
$('.albumSurf-wrapper, .button-1').click(function() {
  event.preventDefault();
  $('#surfing').siblings('div').addClass('hidden');
  $('#surfing').removeClass('hidden');
});
$('.albumSnow-wrapper, .button-2').click(function() {
  event.preventDefault();
  $('#snow').siblings('div').addClass('hidden');
  $('#snow').removeClass('hidden');
});
$('.albumDogs-wrapper, .button-3').click(function() {
  event.preventDefault();
  $('#dogs').siblings('div').addClass('hidden');
  $('#dogs').removeClass('hidden');
});
$('.albumSunsets-wrapper, .button-4').click(function() {
  event.preventDefault();
  $('#sunsets').siblings('div').addClass('hidden');
  $('#sunsets').removeClass('hidden');
});
$('.albumTropics-wrapper, .button-5').click(function() {
  event.preventDefault();
  $('#tropics').siblings('div').addClass('hidden');
  $('#tropics').removeClass('hidden');
});
$('.albumFood-wrapper, .button-6').click(function() {
  event.preventDefault();
  $('#food').siblings('div').addClass('hidden');
  $('#food').removeClass('hidden');
});

//
// var picPosts = "";
// surfPics.forEach(function(item) {
//   picPosts += '<ul id="pics"'
// });
// <ul id="surfing">
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing1.jpg" title="surf1" alt="1" /><h3>Photo 1</h3></div></a></li>
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing2.jpg" title="surf2" alt="2" /><h3>Photo 2</h3></div></a></li>
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing3.jpg" title="surf3" alt="3" /><h3>Photo 3</h3></div></a></li>
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing4.jpg" title="surf4" alt="4" /><h3>Photo 4</h3></div></a></li>
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing5.jpg" title="surf5" alt="5" /><h3>Photo 5</h3></div></a></li>
//   <li><a href="#" class=""><div class="photo-wrapper"><img src="images/surfing6.jpg" title="surf6" alt="6" /><h3>Photo 6</h3></div></a></li>
// </ul>

























})
