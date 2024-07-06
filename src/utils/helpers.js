export const formatTrackDataForExport = (tracks) => {
    console.log('tracks for export', tracks);
    return tracks.map(t => {
        return [
            t?.track?.uri,
            t?.track?.name,
            t?.track?.artists.map(a => a.name).join('; '),
            t?.track?.album?.name,
            t?.track?.duration_ms,
        ]
    });
}

export const exportTracksToCSV = async (tracks) => {
    // TODO : get playlist bname and set as file name.
    const trackInfo = await formatTrackDataForExport(tracks);

    console.log('TrackINFO :: ', trackInfo);
    const headers = ["URI", "Song Name", "Artists", "Album", "Duration (in ms.)"];
    const csvData = [headers, ...trackInfo];

    console.log(csvData.length);

    const csvContent = "data:text/csv;charset=utf-8,"
        + csvData.join("\n").replaceAll('#', '');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tracks.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}