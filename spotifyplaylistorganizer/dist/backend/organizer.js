import { Client, UserHandler, TrackHandler, PlaylistHandler } from 'spotify-sdk';
const client = Client.instance;
let user = new UserHandler();
let playlists = new PlaylistHandler();
let tracks = new TrackHandler();
//most of this is probably going into components
client.settings = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    secretId: process.env.SPOTIFY_SECRET_ID,
    scopes: [
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
    ],
    redirect_uri: 'http://localhost:3000/api/redirect',
};
let Spotify = {
    login() {
        return new Promise((res, rej) => {
            client.login((url) => {
                window.open(url, 'Spotify', 'menubar=no, location=no, resizable=yes, scrollbars=yes, status=no, width=400, height=500');
            });
        });
    },
    sortBySound(playlistName) {
        var _a;
        let relevantPlaylist;
        let trackAnalyses = [];
        user.me()
            .then((me) => me.playlists())
            .then((playlistsCollection) => {
            playlistsCollection.forEach((e) => {
                //search for `playlistName`, then go through each track and get audio analysis
                if (e.name === playlistName)
                    relevantPlaylist = e;
            });
        })
            .catch((err) => console.log(err));
        for (let track of relevantPlaylist.tracks) {
            tracks.audioFeatures([track.id]).then((features) => {
                console.log(features);
                trackAnalyses[trackAnalyses.length - 1] = features;
            });
        }
        console.log((_a = relevantPlaylist.tracks) !== null && _a !== void 0 ? _a : "playlist not found");
    }
};
export { Spotify };
//# sourceMappingURL=organizer.js.map