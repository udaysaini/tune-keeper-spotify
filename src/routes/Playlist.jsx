import axios from "axios";
import { useEffect, useState } from "react";
import PlaylistTable from "../components/PlaylistTable";
import { getUserPlaylists, getUserProfile } from "../services/SpotifyService";

const fetchPlaylists = (user_id) => `https://api.spotify.com/v1/users/${user_id}/playlists`

export const Playlist = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const playlists = await getUserPlaylists();
            console.log({playlists});
            setPlaylists(playlists);
        }
        fetchPlaylists();
    }, [])
    

    return (
        <>
            <div className="flex justify-center p-4 mb-10">
                <h1 className="text-6xl font-bold text-green-500">
                    Playlist
                </h1>

                <button className="left-align" onClick={getUserProfile}>Get Profile Details</button>
            </div>

            <PlaylistTable playlists={playlists} />
        </>
    )
}

export default Playlist;