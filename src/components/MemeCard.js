import React from "react";

export default function MemeCard(data) {
  const { url, title, author } = data;
  return (
    <div>
      <img className="w-64 h-64" alt="meme" src={url} />
      <p>{title}</p>
    </div>
  );
}
