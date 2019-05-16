console.log("working");


// Installed Axios "NPM Install Axios"
require("dotenv").config();
var axios=require("axios");
var fs = require("fs");

// var moment=require("moment");
var Spotify = require("node-spotify-api");

// pulling API with movie 
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

// need to set up for bands in town. 
var query = "https://rest.bandsintown.com/artists/" +  "/events?app_id=codingbootcamp";

axios.get("https://rest.bandsintown.com/artists/").then(
    function(response) {
        console.log("the band name: " + response.data.Bands);
    
    }
);

// fs.writeFile("random.text", "I want it that a way!", function(err) {
//     if (err) {
//         return.console.log(err);
//     }

    
// });

// console.log("random.text was updated!");
