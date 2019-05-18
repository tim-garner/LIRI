console.log("working");


// // Installed Axios "NPM Install Axios"
require("dotenv").config();
var axios=require("axios");
var fs = require("fs");

// var moment=require("moment");
var Spotify = require("node-spotify-api");

// // pulling API with movie 
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie title: " + response.data.Title);
    }

);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The Movie Year: " + response.data.Year);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie rating: " + response.data.imdbRating);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie country: " + response.data.Country);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie language: " + response.data.Language);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie plot: " + response.data.Plot);
    }
);
axios.get("http://www.omdbapi.com/?t=hook&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie actors: " + response.data.Actors);
    }
);



fs.readFile("random.txt", "utf8", function(error, data) {
     if (error) {
     return console.log(error);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
  
    
});

// spotify.search({ type: 'track', query: songName, limit: 5  }, function(err, data) {
//     if (err) {
//     return console.log('Error occurred: ' + err);
//     }
// });

var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
request(queryURL, function (error, response, body) {
    console.log("Venue Name" + result.venue.name)
})