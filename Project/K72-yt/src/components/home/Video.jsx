import React from "react";

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src="/v1.mp4"
    />
  );
};

export default Video;
