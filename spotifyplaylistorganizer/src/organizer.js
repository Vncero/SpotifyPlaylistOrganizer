import {Client, UserHandler, TrackHandler, PlaylistHandler} from 'spotify-sdk';

const client = Client.instance;

let user = new UserHandler();
let playlists = new PlaylistHandler();
let tracks = new TrackHandler();

//most of this is probably going into components

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
    let trackAnalyses = [];
    user.me()
        .then((me) => me.playlists())
        .then((playlistsCollection) => {
            playlistsCollection.forEach((e) => {
                //search for `playlistName`, then go through each track and get audio analysis
                if (e.name === playlistName) relevantPlaylist = e;
            });
        })
        .catch((err) => console.log(err));
    
    for (let track of relevantPlaylist.tracks) {
        tracks.audioFeatures([track.id]).then((features) => {
            console.log(features);
            trackAnalyses[trackAnalyses.length] = features;
        });
    }
    
    console.log(relevantPlaylist.tracks ?? "playlist not found");
}