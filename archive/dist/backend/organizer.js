import { Client, UserHandler, TrackHandler, PlaylistHandler } from 'spotify-sdk';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const client = Client.instance;
const user = new UserHandler();
const playlists = new PlaylistHandler();
const tracks = new TrackHandler();
client.settings = {
    clientId: String(process.env.REACT_APP_SPOTIFY_CLIENT_ID),
    secretId: String(process.env.REACT_APP_SPOTIFY_SECRET_ID),
    scopes: [
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
    ],
    redirect_uri: 'http://localhost:3000/login',
};
let Spotify = {
    login() {
        return new Promise((res, rej) => {
            client.login((url) => {
                window.open(url, 'Spotify', 'menubar=no, location=no, resizable=yes, scrollbars=yes, status=no, width=400, height=500');
                window.addEventListener('storage', (data) => {
                    if (data.key === 'token') {
                        res(data.newValue);
                    }
                });
            });
        });
    },
    getUserPlaylists() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            client.token = (_a = client.token) !== null && _a !== void 0 ? _a : localStorage.getItem('token');
            const profile = yield user.me();
            const playlists = yield profile.playlists();
            const privatePlaylists = playlists.filter(playlist => !(playlist.collaborative));
            console.log(privatePlaylists);
        });
    }
    // sortBySound(playlistName) {
    //     let relevantPlaylist;
    //     let trackAnalyses = [];
    //     user.me()
    //         .then((me) => me.playlists())
    //         .then((playlistsCollection) => {
    //             playlistsCollection.forEach((e) => {
    //                 //search for `playlistName`, then go through each track and get audio analysis
    //                 if (e.name === playlistName) relevantPlaylist = e;
    //             });
    //         })
    //         .catch((err) => console.log(err));
    //     for (let track of relevantPlaylist.tracks) {
    //         tracks.audioFeatures([track.id]).then((features) => {
    //             console.log(features);
    //             trackAnalyses[trackAnalyses.length - 1] = features;
    //         });
    //     }
    //     console.log(relevantPlaylist.tracks ?? "playlist not found");
    // }
};
export default Spotify;
export { client };
//# sourceMappingURL=organizer.js.map