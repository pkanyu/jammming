// Playlist.js
import React from "react";
import Tracklist from "./Tracklist";
import Spotify from "./spotify"; // Make sure to import Spotify

function Playlist({
  playlistName,
  setPlaylistName,
    playlistTracks, 
    setPlaylistTracks,
  onRemove,
}) {
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      alert("Playlist saved to Spotify");
      setPlaylistName("New Playlist");
      // Clear the playlist tracks or handle as needed
        setPlaylistTracks([]);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        className="playlist-name-input"
      />
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button onClick={savePlaylist}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
