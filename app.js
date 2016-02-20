$(document).ready(function(){
// 1. when any album is clicked on homepage it takes us to the
//photos page and the album page and big Pic page is hidden.
//
$('.album-wrapper').click(function(){
  $('#photos-page').show();
  $('#homepage').hide();
  $('#big-photo-section').hide();
})

$('.photo-wrapper').click(function(){
  $('#big-photo-section').show();
  $('#homepage').hide();
  $('#photos-page').hide();
})

























})
