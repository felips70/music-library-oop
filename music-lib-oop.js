function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}


Library.prototype.addPlaylist = function (name) {

  let playlist = {
    name: name,
    tracks: []

  };
  this.playlists.push(playlist);
}


Library.prototype.addTrackToPlaylist = function (playlistName, title, rating, length) {
  if (typeof rating !== 'number' || rating > 5 || rating < 1) {
    console.log('Please input a valid rating');
    return;
  }

  let track = {
    title: title,
    rating: rating,
    length: length
  };

  for (let playlist of this.playlists) {
    if (playlist.name === playlistName) {
      playlist.tracks.push(track);
    } else {
      console.log('Playlist does not exist');
      return;
    }
  }
}

const lib = new Library('theLib', 'me');


lib.addPlaylist('thePlaylist');

lib.addTrackToPlaylist('thePlaylist', 'Magic', 5, 1234);
lib.addTrackToPlaylist('thePlaylist', 'Gold', 4, 4321);


console.log(lib.playlists[0].tracks[0]);