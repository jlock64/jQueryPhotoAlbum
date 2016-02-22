$(document).ready(function(){


// HOMEPAGE ALBUM GRID //
var getAlbumCovers = function() {
  var albumCover = "";
  albums.forEach(function(el) {
    albumCover += "<li>"
    + "<a href=''>"
    + "<div class='album-wrapper' + id='" + el.albumRel + "'>"
    + "<img src='" + el.albumURL + "'  />"
    + "<h3>" + el.albumTitle + "</h3>"
    + "</div>"
    + "</a>"
    + "</li>"
  });
    $('#homepage div.container').children('ul').append(albumCover);
};
getAlbumCovers(albums);

// GET PHOTOS
// var albumPhotosArr = albums.map(function(el) {
//     return el.photos;
//   });
// var url = albumPhotosArr.map(function(el) {
//     return el[0].url;
//   })

  // "<div class='container'>"
  //   + "<h1 class='album-headline'>" + el.albumTitle + "</h1>"
  //   + "<ul>"

// PHOTOS GRID
// var getPhotos = function() {
//     var photoCollection = "";
//     albumPhotosArr.forEach(function(el) {
//       photoCollection +=
//         + "<li>"
//         + "<a href=''>"
//         + "<div class='photo-wrapper'>"
//         + "<img src="images/surfing1.jpg" rel="surf1" />"
//
//
//           <h3>Photo 1</h3></div></a></li>
//           <li><a href="" class=""><div class="photo-wrapper"><img src="images/surfing2.jpg" rel="surf2" /><h3>Photo 2</h3></div></a></li>
//           <li><a href="" class=""><div class="photo-wrapper"><img src="images/surfing3.jpg" rel="surf3" /><h3>Photo 3</h3></div></a></li>
//           <li><a href="" class=""><div class="photo-wrapper"><img src="images/surfing4.jpg" rel="surf4" /><h3>Photo 4</h3></div></a></li>
//           <li><a href="" class=""><div class="photo-wrapper"><img src="images/surfing5.jpg" rel="surf5" /><h3>Photo 5</h3></div></a></li>
//           <li><a href="" class=""><div class="photo-wrapper"><img src="images/surfing6.jpg" rel="surf6" /><h3>Photo 6</h3></div></a></li>
//         </ul>
//       </div>
//     });
// };
//


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


// // when the arrow is clicked the next picture will display
// $('.octicon-chevron-right').click(function() {
//   var bigPicSrc = $('.bigPic img').attr('src');
//
// });

// ALBUM PICTURES //
$('#surfAlbum, .button-1').click(function() {
  event.preventDefault();
  $('#surfing').siblings('div').addClass('hidden');
  $('#surfing').removeClass('hidden');
});
$('#snowAlbum, .button-2').click(function() {
  event.preventDefault();
  $('#snow').siblings('div').addClass('hidden');
  $('#snow').removeClass('hidden');
});
$('#dogsAlbum, .button-3').click(function() {
  event.preventDefault();
  $('#dogs').siblings('div').addClass('hidden');
  $('#dogs').removeClass('hidden');
});
$('#sunsetsAlbum, .button-4').click(function() {
  event.preventDefault();
  $('#sunsets').siblings('div').addClass('hidden');
  $('#sunsets').removeClass('hidden');
});
$('#tropicsAlbum, .button-5').click(function() {
  event.preventDefault();
  $('#tropics').siblings('div').addClass('hidden');
  $('#tropics').removeClass('hidden');
});
$('#foodAlbum, .button-6').click(function() {
  event.preventDefault();
  $('#food').siblings('div').addClass('hidden');
  $('#food').removeClass('hidden');
});


// // ALBUM PICTURES //
// $('.albumSurf-wrapper, .button-1').click(function() {
//   event.preventDefault();
//   $('#surfing').siblings('div').addClass('hidden');
//   $('#surfing').removeClass('hidden');
// });
// $('.albumSnow-wrapper, .button-2').click(function() {
//   event.preventDefault();
//   $('#snow').siblings('div').addClass('hidden');
//   $('#snow').removeClass('hidden');
// });
// $('.albumDogs-wrapper, .button-3').click(function() {
//   event.preventDefault();
//   $('#dogs').siblings('div').addClass('hidden');
//   $('#dogs').removeClass('hidden');
// });
// $('.albumSunsets-wrapper, .button-4').click(function() {
//   event.preventDefault();
//   $('#sunsets').siblings('div').addClass('hidden');
//   $('#sunsets').removeClass('hidden');
// });
// $('.albumTropics-wrapper, .button-5').click(function() {
//   event.preventDefault();
//   $('#tropics').siblings('div').addClass('hidden');
//   $('#tropics').removeClass('hidden');
// });
// $('.albumFood-wrapper, .button-6').click(function() {
//   event.preventDefault();
//   $('#food').siblings('div').addClass('hidden');
//   $('#food').removeClass('hidden');
// });




}) // END OF JQUERY
