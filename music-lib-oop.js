//Library Creation
function Library (name, creator) {
  this.name = name;
  this.playlists = [];

  this.addPlaylist = function (playlist) {
    this.playlists.push(playlist);
  }
}

//Playlist creation
function Playlist (name) {
  this.name = name;
  this.tracks = [];

  this.addTrack = function (track) {
    this.tracks.push(track);
  }

  this.overallRating = function () {
    result = 0;
    for (let track of this.tracks) {
      result += track.rating;
    }
    return result;
  }

  this.totalDuration = function () {
    result = 0;
    for (let track of this.tracks) {
      result += track.length;
    }
    return result;
  }
}

//Track creation
function Track (title, rating, length) {
  if (!Number.isInteger(rating) || rating > 5 || rating < 1) {
    console.log('Please input a valid rating')
    return;
  }
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const lib = new Library ('lib', 'me');

const daPlaylist = new Playlist ('daPlaylist')
const maPlaylist = new Playlist ('maPlaylist');

const daTrack = new Track ('daTrack', 4, 2345);
const maTrack = new Track ('maTrack', 3, 9876);

lib.addPlaylist(maPlaylist);
lib.addPlaylist(daPlaylist);
daPlaylist.addTrack(daTrack);
maPlaylist.addTrack(maTrack);