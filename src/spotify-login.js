const redirect_uri = 'http://localhost:5173/';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = ['user-read-private', 'user-read-email']; // 

const params = {
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    redirect_uri: encodeURIComponent(redirect_uri),
    scope: scopes.join('%20'),
    response_type: 'token',
    show_dialog: true
}
const parse = new URLSearchParams(params).toString();
export const SpotifyURL = `${authEndpoint}?${parse}`;
