import "./video.css";
import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({url,channel,descriptiion,song,likes,messages,shares}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideopress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideopress}
        src={url}
></video>
 <VideoFooter channel={channel} descriptiion={descriptiion} song={song}/>
 <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  );
}
export default Video;
