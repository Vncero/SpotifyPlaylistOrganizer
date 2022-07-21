import {Client, UserHandler, TrackHandler, PlaylistHandler} from 'spotify-sdk';

const client = Client.instance;

client.settings = {
    clientId: '',
    secretId: '',
    scopes: [
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
    ],
    redirect_uri: '',
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

let user = new UserHandler();
let playlists = new PlaylistHandler();
let tracks = new TrackHandler();

function sortBySound(playlistName) {
    let usersPlaylists;
    user.me().then((me) => {
        user.playlists(me.id).then((playlists) => {
            usersPlaylists = playlists.items;
        });
    });
    if (usersPlaylists) console.log(usersPlaylists);
}