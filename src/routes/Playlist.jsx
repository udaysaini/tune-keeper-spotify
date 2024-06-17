import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../components/Table";

const fetchPlaylists = (user_id) => `https://api.spotify.com/v1/users/${user_id}/playlists`

export const Playlist = () => {
    const [ userId, setUserId ] = useState('');
    const [ playlists, setPlaylists ] = useState([]);

    async function getProfile() {
        let accessToken = localStorage.getItem('access_token');
        const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const data = await response.data;
        console.log({ data })

        setUserId(data?.id);
    }
    // async function getProfile() {
    //     let accessToken = localStorage.getItem('access_token');
    //     const response = await fetch('https://api.spotify.com/v1/me', {
    //         headers: {
    //             Authorization: 'Bearer ' + accessToken
    //         }
    //     });
    //     const data = await response.json();
    //     console.log({ data })

    //     setUserId(data?.id)
    // }

    useEffect(() => {
        console.log({ userId });
        const getPlaylists = async () => {
            let accessToken = localStorage.getItem('access_token');
            const response = await axios.get(fetchPlaylists(userId), {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const data = await response.data.items;
            console.log('playlists', { data })
            setPlaylists(data);
        }

        getPlaylists();
    }, [userId])

    return (
        <>
            <h1 className="text-6xl font-bold text-green-500">
                Playlist
            </h1>

            <button onClick={getProfile}>Get Profile Details</button>

            <hr />


            {/* <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <img src={'/'} alt="Playlist" className="h-12 w-12 rounded-full" />
                        <div>
                            <h2 className="font-semibold">{name}</h2>
                            <p className="text-gray-500 text-sm">{createdBy}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {isPublic && (
                            <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Public</span>
                        )}
                        {isCollaborative && (
                            <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs">Collaborative</span>
                        )}
                    </div>
                </div>
                <p className="text-gray-600 mb-2">{description}</p>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                        Edit
                    </button>
                </div>
            </div> */}


            <Table playlists={playlists} />


        </>
    )
}

export default Playlist;