import PlaylistRow from "./PlaylistRow";

const PlaylistTable = ({ playlists }) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center">

                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                {/* ID */}
                            </th>
                            <th scope="col" className="px-6 py-3">Playlist</th>
                            <th scope="col" className="px-6 py-3">No. of Tracks</th>
                            <th scope="col" className="px-6 py-3">Collaborative <br /> Public </th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playlists && playlists.map((playlistItem) => {
                                return (
                                    <PlaylistRow key={playlistItem?.id} playlistItem={playlistItem} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PlaylistTable;