function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function (name) {

  let playlist = {
    name: name
  };
  this.playlists.push(playlist);

}

const lib = new Library("theLib", "me");


lib.addPlaylist("thePlaylist");



console.log(lib.playlists);