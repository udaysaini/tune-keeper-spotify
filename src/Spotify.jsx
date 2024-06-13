import { getAuth } from "./spotify-axios";
import { useEffect } from "react";

var client_id = 'CLIENT_ID';
var client_secret = 'CLIENT_SECRET';


export const Spotify = (props) => {
    console.log(props);

    useEffect(() => {
        async function getToken() {
            const token = await getAuth();
            localStorage.setItem('access_token', token);
            console.log('auth run', token);
        }
        getToken();
    }, [])

    return (
        <>
            <h1>Spotify</h1>
        </>
    )
};

export default Spotify;