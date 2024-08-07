import axios from "axios";

const BASE_URL = `https://api.spotify.com/v1`;
export const TRACK_API_LIMIT = 50;
export const PLAYLIST_API_LIMIT = 50;

const getAccessToken = () => {
    return localStorage.getItem('access_token');
}

export const getUserProfile = async () => {
    let accessToken = getAccessToken();
    try {
        const response = await axios.get(`${BASE_URL}/me`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        return response.data;
    } catch {
        console.error('Error fetching profile', error);
        throw error;
    }
}

export const getUserPlaylists = async ({ offset = 0, limit = 20 } = {}) => {
    let accessToken = getAccessToken();
    try {
        const response = await axios.get(`${BASE_URL}/me/playlists`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            params: {
                limit,
                offset
            }
        });
        // console.log('response.data.items', response.data.items)
        console.log({response});

        return {
            playlists: response.data.items,
            totalPlaylists: response.data.total
        };
    } catch(error) {
        console.error('Error fetching playlists', error);
        throw error;
    }
}

export const getUserPlaylistByUserId = async ( user_id ) => {
    
}

export const getTracksForPlaylist = async (playlist_id) => {
    let accessToken = getAccessToken();
    try {
        const response = await axios.get(`${BASE_URL}/playlists/${playlist_id}/tracks`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            params: {
                limit: 50,
                market: 'CA',
                fields: 'items(added_by.id,track(uri,id,name,href,preview_url,duration_ms,album(name,href),artists(name,uri,followers,genres,id)))'
            }
        });
        return response.data.items;        
    } catch (error) {
        console.error('Error fetching playlists', error);
        throw error;
    }
}

export const getTracksForPlaylist_Export = async (playlist_id, offset, limit) => {
    // console.log('Offset aaya hai ', offset);
    // TODO : Avoid Limit as MAGIC NUMBER. 
    let accessToken = getAccessToken();
    try {
        const response = await axios.get(`${BASE_URL}/playlists/${playlist_id}/tracks`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            params: {
                limit,
                offset,
                market: 'CA',
                fields: 'items(added_by.id,track(uri,id,name,href,preview_url,duration_ms,album(name,href),artists(name,uri,followers,genres,id)))'
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching playlists', error);
        throw error;
    }
}
