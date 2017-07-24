//TWITTER BABY!
var keys = require('./keys');
var Twitter = require('twitter');

var params = {
  screen_name: 'puck1692'
};

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

exports.getTweets = function() {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var data = JSON.parse(response.body).length;
      if (data > 10) {
        data = 10;
      }
      for (var i = 0; i < data; i++) {
        console.log("Tweet #:" + i + "  " + ((JSON.parse(response.body))[i]).text);
      }
    } else {
      console.log('twitter request not working');
    }
  });
};

//SPOTYFY
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: keys.Spotify.id,
  secret: keys.Spotify.secret
});

exports.songInfo = function(userQuerry) {
  if (userQuerry === undefined) {
    userQuerry = "The Sign";
  }
  spotify.search({
    type: 'track',
    query: userQuerry
  }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[0].artists[0].name);
    console.log(userQuerry);
    console.log(data.tracks.items[0].album.name);
  });
};

//IMDB
var request = require('ajax-request');
exports.movieInfo = function(querry) {
  var link = "http://www.omdbapi.com/?apikey=40e9cece&t=" + querry;
  request({
    url: link,
    method: 'GET',
  }, function(err, res, body) {
    console.log("Title: " + (JSON.parse(body)).Title);
    console.log("year: " + (JSON.parse(body)).Year);
    console.log("imdb rating: " + (JSON.parse(body)).Ratings[0].Value);
    console.log("rotten tomatoes rating: " + (JSON.parse(body)).Ratings[1].Value);
    console.log("Country: " + (JSON.parse(body)).Country);
    console.log("Lamguage: " + (JSON.parse(body)).Language);
    console.log("Plot: " + (JSON.parse(body)).Plot);
    console.log("Actors: " + (JSON.parse(body)).Actors);
  });

};
