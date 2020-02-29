/*jshint esversion: 6 */

const $searchBar = $('#search-bar'); //the search bar
const $pictures = $('.gallery-wrapper a'); //picutres in gallery
let term; //the user's search term
let search; //the words a picutre can be found with

lightbox.option({ //options for the lightboxs
  'wrapAround': true,
  'maxWidth': '100%',
  'maxHight': 'auto',
  'albumLabel': '',
});

$searchBar.on('keyup', function(){ //key up triggers search images
  term = $(this).val().toLowerCase(); //set search term

  //loop through picures and check if the term matches title or caption
  $pictures.each(function() {
    search = $(this).attr('data-alt') + '' + $(this).attr('data-title'); // make the searchable string
    if (search.search(new RegExp(term, "i")) < 0) { //search it and compaire it to the term the user entered
      $(this).hide(); //hide if it doesnt match
    } else {
      $(this).show(); //show if it does
    }
  });
});