const app = {};
// my api key

app.apiKey = "aa0e1ce1cb622fb5704728e8b09bd4bd";
app.url = "http://ws.audioscrobbler.com/2.0/";

let userInput = '';

// method to store user's input into variable
$('form').on('submit', function (event) {
  event.preventDefault();
  app.getUserInput();
})

// get user input function
app.getUserInput = function() {
  userInput = $('#search').val();
  console.log(userInput);
  app.getSimilarArtists(userInput);
}

app.getSimilarArtists = function(artist){
  $.ajax({
    url: app.url,
    data: {
      api_key: app.apiKey,
      method: 'artist.getsimilar',
      format: 'json',
      artist: artist,
      autocorrect: 1,
      limit: 8
    }
  }).then(function (result) {
    console.log(result);
  })
}

app.init = function() {

}

//document ready
$(function(){
  app.init();
})