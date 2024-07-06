import axios from "axios";
import StyledButton from "./ui/StyledButton";
import { useState } from "react";
import SpotifyButton from "./ui/SpotifyButton";
import { getTracksForPlaylist, getTracksForPlaylist_Export } from "../services/SpotifyService";
import TracksTable from "./TracksTable";
import { useNavigate } from "react-router-dom";
import { exportTracksToCSV } from "../utils/helpers";

const PlaylistRow = ({playlistItem}) => {
    const [tracks, setTracks] = useState([]);
    const navigate = useNavigate();

    const getTracksFromPlaylist = async (playlist_id, href) => {
        // console.log(playlist_id, 'Clicked');
        // console.log({href});
        let accessToken = localStorage.getItem('access_token');
        try {
            const response = await axios.get(href, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                },
                params: {
                    limit: 50,
                    market: 'CA',
                    fields: 'items(added_by.id,track(uri,id,name,href,preview_url,duration_ms,album(name,href),artists(name,uri,followers,genres,id)))'
                }
            });
            const data = await response.data.items;
            setTracks(() => [...data])
            // console.log('data tracks', { data })
            // console.log('tracks here in state', { tracks })
        } catch (error) {
            console.error('Error fetching playlists', error);
        }
    };

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

    const exportTracks = async (playlist_id, total_tracks) => {
        // console.log(total_tracks);
        try {
            let LIMIT = 50;

            const tracksArray = [];
            let songsFetched = 0;
            let songsToBeFetched = total_tracks;
            let offset = 0;

            for ( let i = 0; tracksArray.length < songsToBeFetched;) {
                // if ()
                const tempTracks = await getTracksForPlaylist_Export(playlist_id, offset, LIMIT);
                // console.log('songs array temp', tempTracks);

                tracksArray.push(...tempTracks);
                // console.log('tracksArray now:', tracksArray);

                songsFetched = tracksArray.length;
                offset += LIMIT;

                // console.log(` songs Fetched ${songsFetched} offset ${offset} `);
                i = i + offset;
            }

            // console.log('tracksArray in the end:', tracksArray);
            exportTracksToCSV(tracksArray);
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
            <td className="w-4 p-4">
                {/* <BiSolidPlaylist className="h-7 w-7" /> */}
                {/* {playlistItem?.id} */}
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {
                    playlistItem?.images ? <img className="w-10 h-10 rounded-full" src={playlistItem?.images[0].url} alt="Jese image" /> : <span>N/A</span>
                }
                <div className="ps-3">
                    <div className="text-base font-semibold">{playlistItem?.name}</div>
                    <div className="font-normal text-gray-500">{playlistItem?.owner?.display_name}</div>
                </div>
            </th>
            <td className="px-6 py-4">
                {playlistItem?.tracks?.total}
            </td>
            <td className="px-6 py-4">
                {
                    playlistItem?.collaborative ?
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Collaborative
                        </div> :
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Collaborative
                        </div>
                }
                {
                    playlistItem?.public ?
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Public
                        </div> :
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Public
                        </div>
                }
            </td>
            <td className="px-6 py-4 flex ">
                <SpotifyButton buttonText="See Tracks" onClick={() => getTracksFromPlaylist(playlistItem?.id, playlistItem.tracks.href)} className="mt-4"/>
                <SpotifyButton buttonText="See Tracks (Service)" onClick={() => fetchTracks(playlistItem?.id)} className="mt-4"/>
                <SpotifyButton buttonText="See Tracks (new Comp)" onClick={() => navigate(`/playlist/:${playlistItem?.id}`)} className="mt-4"/>

                <SpotifyButton onClick={() => exportTracks(playlistItem?.id, playlistItem?.tracks?.total)} buttonText="Export Tracks" className="mt-4" />

                <SpotifyButton buttonText="Open in Spotify" href={playlistItem?.external_urls?.spotify} className="mt-4" />

                {/* <StyledButton buttonText={'See Tracks'} href={playlistItem?.external_urls?.spotify} />

                <StyledButton buttonText={'Export Tracks'} href={playlistItem?.external_urls?.spotify} />

                <StyledButton buttonText={'Open in Spotify'} href={playlistItem?.external_urls?.spotify} /> */}
            </td>
        </tr>
    )
}


export default PlaylistRow;