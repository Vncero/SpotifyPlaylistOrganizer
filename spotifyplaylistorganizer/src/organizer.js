import {Client, UserHandler, TrackHandler, PlaylistHandler} from 'spotify-sdk';

const client = Client.instance;

let user = new UserHandler();
let playlists = new PlaylistHandler();
let tracks = new TrackHandler();


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
    } else if (window.location.hash.split('&')[0].split('=')[1]) {
        sessionStorage.token = window.location.hash.split('&')[0].split('=')[1];
        client.token = sessionStorage.token;
    }
}
session();

function login() {
    client.login().then(url => {
        window.location.href = url;
    });
}
document.querySelector('#login').onclick = login;

function sortBySound(playlistName) {
    let relevantPlaylist;
    user.me()
        .then((me) => me.playlists())
        .then((playlistsCollection) => {
            playlistsCollection.forEach((e) => {
                //search for `playlistName`, then go through each track and get audio analysis
                if (e.name === playlistName) relevantPlaylist = e; 
            });
        })
        .catch((err) => console.log(err));
    
    console.log(relevantPlaylist ?? "playlist not found");
}