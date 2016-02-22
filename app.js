$(document).ready(function(){


// ADDING ALBUM COVERS TO HOMEPAGE
function getAlbumCovers() {
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

// ADDING PHOTOS TO PHOTOS PAGE
// function addPhotos() {
//   var photoStr ="";
//   albums.forEach(function(el) {
//     photoStr += "<div id='" + el.albumTitle + "' class='container'>"
//     + "<h1 class='album-headline'>" + el.albumTitle + "</h1>"
//     + "</div>"
//   });
//   var photoArr = albums.map(function(el) { // creates my array off all photos
//   return el.photos;
// });
//   photoArr.forEach(function(el) {
//     photoStr += "<ul>"
//     + "<li>"
//     + "<a href='' >"
//     + "<div class='photo-wrapper'>"
//     + "<img src='" + el.url + "' + rel='" + el.rel + "' />"
//     + "<h3>" + el.name + "</h3>"
//     + "</div>"
//     + "</a>"
//     + "</li>"
//     + "</ul>"
// });
//   $('.right-col').append('photoStr');
// };
// addPhotos(albums);
//
// // PULL PHOTOS FROM ALBUM SELECTED
// function getPhotos(albumSelected) {
//   var photoArr = albums.filter (function (item) {
//     return item.albumRel === albumSelected;
//   });
//   return photoArr[0].photos;
// };

// SELECTING PHOTOS
// var photoTmpl = _.template($('#albumSelectedPhotos').html()); // create template function. Selecting id of script in head #albumSelectedPhotos and grabbing all it's HTML. --> Now called photoTmpl
// // photoTmpl(albums[0].photos[0]) will return 1st array's 1st photo
// // <li><a href="" ><div class="photo-wrapper"><img src="images/surfing1.jpg"rel="surf1" /><h3>Photo1</h3></div></a></li>
// // Now need to loop over each photo in each album
// albums[0].photos.forEach(function(el) {
//   console.log(photoTmpl(el));
// })  // this will log all 6 photos in 1st album array --> surfing



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


// SELECTING ALBUM PICTURES //
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





}) // END OF JQUERY
