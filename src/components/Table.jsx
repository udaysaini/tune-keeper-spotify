const Table = (props) => {
    const { playlists } = props;
    console.log(playlists);


    const pl = playlists.filter(p => p?.images?.length === 0);
    console.log(pl);
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Playlist
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No. of Tracks
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Collaborative
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playlists && playlists.map((playlist) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={playlist?.id}>
                                        <td className="w-4 p-4">
                                            {playlist?.id}
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            {
                                                playlist?.images ? <img className="w-10 h-10 rounded-full" src={playlist?.images[0].url} alt="Jese image" /> : <span>N/A</span>
                                            }
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{playlist?.name}</div>
                                                <div className="font-normal text-gray-500">{playlist?.owner?.display_name}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {playlist?.tracks?.total}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;