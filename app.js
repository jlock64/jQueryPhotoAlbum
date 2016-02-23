$(document).ready(function(){

// ADDING ALBUM COVERS TO HOMEPAGE
var albumTemplate = _.template($('#albumsHomePage').html());
  var albumCover = "";
  albums.forEach(function(el) {
    albumCover += albumTemplate(el);
  });
    $('#homepage div.container').children('ul').append(albumCover);



// ADDING PHOTOS TO PHOTOS PAGE
function addPhotos() {
  var photoContainerTmpl = _.template($('#photoContainerTmpl').html());
  var photoTmpl = _.template($('#photoTmpl').html());
  var photoStr = "";
  albums.forEach(function(el) {
    photoStr += photoContainerTmpl(el);

    el.photos.forEach(function (item) {
      photoStr += "<li>"
      + "<a href='' >"
      + "<div class='photo-wrapper'>"
      + "<img src='" + item.url + "' + rel='" + item.rel + "' />"
      + "<h3>" + item.name + "</h3>"
      + "</div>"
      + "</a>"
      + "</li>";
    })
    photoStr += "</ul>"
    photoStr += "</div>"
  });
  $('.right-col').append(photoStr);
};
addPhotos(albums);



// This gives me an array of list items on homepage
// var selectedPhotoAlbums = "";
// $('#albums').children('li').on('click', function (event) {
//   event.preventDefault();
//   $('#photos-page').siblings('section').addClass('hidden');
//   $('#photos-page').removeClass('hidden');
//   selectedPhotoAlbums = ($(this).attr('id')); // --> gives me #surfAlbum is surf clicked
//   // showPhotoAlbums(selectedPhotoAlbums);
// });

// // PULL PHOTOS FROM ALBUM SELECTED
// function getPhotos(albumSelected) {
//   var photoArr = albums.filter (function (el) {
//     console.log('ive been clicked');
//     return el.albumRel === albumSelected;
//   });
//   // return photoArr[0].photos;
// };

// var showPhotoAlbums = function(albumPagePhotos) {
// var photoStr = "";
// _.each(getPhotos(selectedPhotoAlbums), function (el) {
//       photoStr += "<li>"
//       + "<a href='' >"
//       + "<div class='photo-wrapper'>"
//       + "<img src='" + el.url + "' + rel='" + el.rel + "' />"
//       + "<h3>" + el.name + "</h3>"
//       + "</div>"
//       + "</a>"
//       + "</li>"
//   });
// $('.right-col').children('ul').append(photoStr);
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
  $('#Surfing').siblings('div').addClass('hidden');
  $('#Surfing').removeClass('hidden');
});
$('#snowAlbum, .button-2').click(function() {
  event.preventDefault();
  $('#Snow').siblings('div').addClass('hidden');
  $('#Snow').removeClass('hidden');
});
$('#dogsAlbum, .button-3').click(function() {
  event.preventDefault();
  $('#Dogs').siblings('div').addClass('hidden');
  $('#Dogs').removeClass('hidden');
});
$('#sunsetsAlbum, .button-4').click(function() {
  event.preventDefault();
  $('#Sunsets').siblings('div').addClass('hidden');
  $('#Sunsets').removeClass('hidden');
});
$('#tropicsAlbum, .button-5').click(function() {
  event.preventDefault();
  $('#Tropics').siblings('div').addClass('hidden');
  $('#Tropics').removeClass('hidden');
});
$('#foodAlbum, .button-6').click(function() {
  event.preventDefault();
  $('#Food').siblings('div').addClass('hidden');
  $('#Food').removeClass('hidden');
});





}) // END OF JQUERY PAGE
