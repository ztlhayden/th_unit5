const $searchBar = $('#search-bar'); //the search bar
let term; //the user's search term

$searchBar.on('keyup', function(){ //key up triggers search images
  term = $(this).val().toLowerCase();
  // console.log(term);
});

//display picutres