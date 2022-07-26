// import SpotifyWebApi from "spotify-web-api-node"

// var SpotifyApi = new SpotifyWebApi({
//     clientId : '4b1bcce8cd394968ba79cce017cf5b4d',
//     clientSecret : 'c7ffac14e10d4f919ab33ebbd2e90ba4',
//     redirectUri : 'http://localhost:8888/callback'
// });

// function getAuthorizationURL(scopes, state) {
//     return SpotifyApi.createAuthorizeURL(scopes, state);
// }

// function setTokens(authCode) {
//     SpotifyApi.authorizationCodeGrant(authCode).then({
//         function(data) {
//             console.log('expiration:', data.body['expires_in']);
            
//             SpotifyApi.setAccessToken(data.body['access_token']);
//             SpotifyApi.setRefreshToken(data.body['refresh_token']);            
//         },
//         function(err) {
//             console.log('error: ', err);
//         }
//     });
// }

// function getPlaylistTracks(playlistId) {
//     var playlistTracks;
//     SpotifyApi.getPlaylistTracks(playlistId).then({
//         function(data) {
//             playlistTracks = data.items;
//         }
//     });
//     return playlistTracks;
// }

// function sortTracks(tracks) {
//     let sorted = [];
//     tracks.forEach(track => {
//         SpotifyApi.getAudioAnalysisForTrack(track)
//     });
// }