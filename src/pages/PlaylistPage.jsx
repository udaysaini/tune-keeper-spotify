import { useEffect, useState } from "react";
import PlaylistTable from "../components/PlaylistTable";
import { PLAYLIST_API_LIMIT, getUserPlaylists } from "../services/SpotifyService";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Pagination from "../components/Pagination";
import Dropdown from "../components/ui/Dropdown";

export const PlaylistPage = () => {
    const [playlists, setPlaylists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(20);

    const limits = [10, 20, 30, 50];
    // const _PLAYLIST_API_LIMIT = 10;

    const fetchPlaylists = async (page, limit) => {
        const offset = (page - 1) * limit;
        const playlistsInfo = await getUserPlaylists({offset, limit});
        console.log(playlistsInfo);
        setPlaylists(playlistsInfo?.playlists);
        setTotalPages(Math.ceil(playlistsInfo?.totalPlaylists/limit));
    }

    useEffect(() => {
        fetchPlaylists(currentPage, limit);
    }, [currentPage, limit]);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleLimitChange = (event) => {
        setLimit(+event.target.value);
        // Call the API with the new limit
        // fetchPlaylistsWithNewLimit(event.target.value);
    };


    return (
        <>
            <div className="flex justify-center p-4 mb-10">
                <h1 className="text-6xl font-bold text-green-500">
                    Playlists
                </h1>
            </div>

            <div className="flex flex-col justify-between items-center space-y-8">
                <Dropdown options={limits} selectedValue={limit} onChange={handleLimitChange} />
                <PlaylistTable playlists={playlists} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>

            {/* {PaginationCustom} */}

        </>
    )
}

export default PlaylistPage;