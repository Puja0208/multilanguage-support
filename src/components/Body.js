import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, []);
  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/2");
    const json = data.json();
  };
  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => {
          <MemeCard key={i} data={meme} />;
        })
      )}
    </div>
  );
};

export default Body;
