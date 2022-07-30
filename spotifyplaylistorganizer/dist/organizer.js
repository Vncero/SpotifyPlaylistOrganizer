import { Client, UserHandler, TrackHandler, PlaylistHandler } from 'spotify-sdk';
var client = Client.instance;
var user = new UserHandler();
var playlists = new PlaylistHandler();
var tracks = new TrackHandler();
client.settings = {
    clientId: '',
    secretId: '',
    scopes: [
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
    ],
    redirect_uri: 'localhost:3000/redirect',
};
function session() {
    if (sessionStorage.token) {
        client.token = sessionStorage.token;
    }
    else if (window.location.hash.split('&')[0].split('=')[1]) {
        sessionStorage.token = window.location.hash.split('&')[0].split('=')[1];
        client.token = sessionStorage.token;
    }
}
session();
function login() {
    client.login().then(function (url) {
        window.location.href = url;
    });
}
document.querySelector('#login').onclick = login;
function sortBySound(playlistName) {
    var relevantPlaylist;
    user.me()
        .then(function (me) { return me.playlists(); })
        .then(function (playlistsCollection) {
        playlistsCollection.forEach(function (e) {
            //search for `playlistName`, then go through each track and get audio analysis
            if (e.name === playlistName)
                relevantPlaylist = e;
        });
    })
        .catch(function (err) { return console.log(err); });
    console.log(relevantPlaylist !== null && relevantPlaylist !== void 0 ? relevantPlaylist : "playlist not found");
}
//# sourceMappingURL=organizer.js.map