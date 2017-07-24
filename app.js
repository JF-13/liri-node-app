var liri = require('./liri');

var prompt = process.argv[2];

if (prompt === 'my-tweets') {
  liri.getTweets();
} else if (prompt === "spotify-this-song") {
  liri.songInfo(process.argv[3]);
} else if (prompt === "movie-this") {
  liri.movieInfo(process.argv[3]);
} else if (prompt === "do-what-it-says") {
  pass();
} else {
  console.log("I dont know how to do that yet...");
  console.log("please select a command out of the list bellow");
  console.log("my-tweets");
  console.log("spotify-this-song");
  console.log("movie-this");
  console.log("do-what-it-says");
}
