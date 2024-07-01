import { useState } from "react";
import PlaylistRow from "./PlaylistRow";

const getPlaylistSongsURL = (playlist_id) => `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`

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
                            <th scope="col" className="px-6 py-3">
                                Playlist
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No. of Tracks
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Collaborative <br />
                                Public
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playlists && playlists.map((playlistItem) => {
                                return (
                                    <PlaylistRow key={playlistItem?.id} playlistItem={playlistItem} />
                                    // <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={playlist?.id} onClick={() => getTracksFromPlaylist(playlist?.id, playlist.tracks.href)}>
                                    //     <td className="w-4 p-4">
                                    //         {/* <BiSolidPlaylist className="h-7 w-7" /> */}
                                    //         {/* {playlist?.id} */}
                                    //     </td>
                                    //     <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    //         {
                                    //             playlist?.images ? <img className="w-10 h-10 rounded-full" src={playlist?.images[0].url} alt="Jese image" /> : <span>N/A</span>
                                    //         }
                                    //         <div className="ps-3">
                                    //             <div className="text-base font-semibold">{playlist?.name}</div>
                                    //             <div className="font-normal text-gray-500">{playlist?.owner?.display_name}</div>
                                    //         </div>
                                    //     </th>
                                    //     <td className="px-6 py-4">
                                    //         {playlist?.tracks?.total}
                                    //     </td>
                                    //     <td className="px-6 py-4">
                                    //         {
                                    //             playlist?.collaborative ?
                                    //                 <div className="flex items-center">
                                    //                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Collaborative
                                    //                 </div> :
                                    //                 <div className="flex items-center">
                                    //                     <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Collaborative
                                    //                 </div>
                                    //         }
                                    //         {
                                    //             playlist?.public ?
                                    //                 <div className="flex items-center">
                                    //                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Public
                                    //                 </div> :
                                    //                 <div className="flex items-center">
                                    //                     <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Public
                                    //                 </div>
                                    //         }
                                    //     </td>
                                    //     <td className="px-6 py-4">
                                    //         <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Export</a>

                                    //         <button onClick={exportTracks} className="btn bg-green-500 text-white">Export Tracks</button>


                                    //         <StyledButton buttonText={'Open in Spotify'} href={playlist?.external_urls?.spotify} />
                                    //     </td>
                                    // </tr>
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