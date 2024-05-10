// App.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from "./spotify"; // Make sure Spotify is correctly imported

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const search = (term) => {
    Spotify.search(term).then((searchResults) =>
      setSearchResults(searchResults)
    );
  };

  return (
    <div>
      <SearchBar onSearch={search} />
      <SearchResults searchResults={searchResults} onAdd={addTrackToPlaylist} />
      <Playlist
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        onRemove={removeTrackFromPlaylist}
      />
    </div>
  );
}

export default App;
