console.log("working");

require("dotenv").config();
// Installed Axios "NPM Install Axios"
var axios=require("axios");
var movieName= process.argv[2];

//pulling API with movie 
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
        console.log("Rotten Tomatoes Rating: " + response.data.Tomatoes);
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
