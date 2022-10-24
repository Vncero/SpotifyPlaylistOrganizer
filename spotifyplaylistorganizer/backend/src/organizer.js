import {Client, UserHandler, TrackHandler, PlaylistHandler} from 'spotify-sdk';

export const client = Client.instance;

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

const Spotify = {
    login() {
        return new Promise((res, rej) => {
            client.login((url) => {
                window.open(
                    url,
                    'Spotify',
                    'menubar=no, location=no, resizable=yes, scrollbars=yes, status=no, width=400, height=500'
                );

                window.addEventListener('storage', (data) => {
                    if (data.key === 'token') {
                        res(data.newValue);
                    }
                });
            });
        });
    },
    async getUserPlaylists() {
        client.token = client.token ?? localStorage.getItem('token');
        const profile = await user.me();
        const playlists = await profile.playlists();

        // make options on menu for which playlist to display
        const privatePlaylists = playlists.filter(playlist => !(playlist.collaborative));
        console.log(privatePlaylists);
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