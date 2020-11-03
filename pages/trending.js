import React, { useEffect, useState } from "react";
import Link from "next/link";

const Trending = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("api/trending")
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => alert(err));
  }, []);

  return (
    <div className='trending trending-header'>
      <h1 className='trending-heading'>Trending #5</h1>
      {songs &&
        songs.map(song => (
          <h3 className='trending-music-titles' key={song.id}>
            {song.title}
          </h3>
        ))}
    </div>
  );
};

export default Trending;
