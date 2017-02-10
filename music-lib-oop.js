//Library Creation
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

//Playlist creation
function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

//Adding playlist to a library
Library.prototype.addPlaylist = function (playlist) {
  this.playlists.push(playlist);
}

//Adding track to a playlist
Playlist.prototype.addTrack = function (title, rating, length) {
  if (typeof rating !== 'number' || rating > 5 || rating < 1) {
    console.log('Please input a valid rating');
    return;
  }

  let track = {
    title: title,
    rating: rating,
    length: length
  };

  this.playlist.push(track);
}

const myPlaylist = new Playlist('myPlaylist');

const lib = new Library('theLib', 'me');

console.log(myPlaylist);

