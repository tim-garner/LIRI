console.log("working");


// // Installed Axios "NPM Install Axios"
require("dotenv").config();
var axios=require("axios");
var fs = require("fs");

// var moment=require("moment");
var Spotify = require("node-spotify-api");

// // pulling API with movie 
axios.get("http://www.omdbapi.com/?t=mr nobody&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie title: " + response.data.Title);
        console.log("The Movie Year: " + response.data.Year);
        console.log("The movie rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("The movie country: " + response.data.Country);
        console.log("The movie language: " + response.data.Language);
        console.log("The movie plot: " + response.data.Plot);
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
