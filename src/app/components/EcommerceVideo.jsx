"use client";
import React from "react";
import ReactPlayer from "react-player";

const EcommerceVideo = () => {
  //video path
  let videosrc = "/videos/ecommerceVideo.mp4";

  return (
    <div>
      <h1 className="text-center">Ecommerce Django and React  Presentation</h1>
      <ReactPlayer
        width="500px"
        height="400px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default EcommerceVideo;