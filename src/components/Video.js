import React from "react";
import ReactPlayer from "react-player";
import "./Elements/Cards/CardMedia.css";

const Video = () => {
  const externalSource = "https://youtu.be/JH1p2p0WW2w";
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={externalSource}
          controls
          muted
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Video;
