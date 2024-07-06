import { useEffect, useState } from "react";
import PlaylistTable from "../components/PlaylistTable";
import { getUserPlaylists } from "../services/SpotifyService";

export const PlaylistPage = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const playlists = await getUserPlaylists();
            setPlaylists(playlists);
        }
        fetchPlaylists();
    }, [])

    return (
        <>
            <div className="flex justify-center p-4 mb-10">
                <h1 className="text-6xl font-bold text-green-500">
                    Playlists
                </h1>
            </div>

            <PlaylistTable playlists={playlists} />
        </>
    )
}

export default PlaylistPage;