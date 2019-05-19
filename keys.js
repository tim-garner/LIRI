var movie = require("./liri");
var movie = new movie();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search) {
  search = "movie";
}

if (!term) {
  term = "hook";
}

if (search === "show") {
  console.log("Searching for movie");
  tv.findShow(term);
} else {
  console.log("Searching for TV Actor");
}

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var keys = require("./keys.js");
