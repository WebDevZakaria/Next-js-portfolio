"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "/videos/intro.mp4";

  return (
    <div className="mx-[-30px]">


      <ReactPlayer
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        width={400}
        height={400}
      />
      <source src={videosrc} type="video/mp4"  />
    </div>
  );
};

export default VideoPlayer;