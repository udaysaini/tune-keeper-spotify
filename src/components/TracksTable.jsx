import { useEffect, useState } from "react";


const TracksTable = ({ playlist_id}) => {
    // console.log('Tracks inside the component :', tracks);
    const [tracks, setTracks] = useState([]);

    const fetchTracks = async (playlist_id) => {
        try {
            const tracksForPlaylist = await getTracksForPlaylist(playlist_id);
            // console.log('tracksForPlaylist inside', tracksForPlaylist);
            setTracks([...tracksForPlaylist]);
        } catch (error) {
            console.error(error);
            throw error;
        }
        // console.log('tracks state ', tracks);
    }

    useEffect(() => {
        fetchTracks(playlist_id);
    }, []);

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Tracks in {playlists.find(pl => pl.id === selectedPlaylist)?.name}</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Track Name</th>
                            <th className="px-6 py-3">Artists</th>
                            <th className="px-6 py-3">Album</th>
                            <th className="px-6 py-3">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            tracks.map((track) => (
                                <tr key={track?.track?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">{track?.track?.name}</td>
                                    <td className="px-6 py-4">{track?.track?.artists.map(artist => artist.name).join(', ')}</td>
                                    <td className="px-6 py-4">{track?.track?.album?.name}</td>
                                    <td className="px-6 py-4">{Math.floor(track?.track?.duration_ms / 60000)}:{((track?.track?.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}</td>
                                </tr>
                            ))
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TracksTable;