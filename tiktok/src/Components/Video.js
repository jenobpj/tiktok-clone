import "./video.css";
import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
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
        src="https://v16-webapp.tiktok.com/3ce98cf3d80f9e277974bc4faae91ee2/61c97513/video/tos/useast2a/tos-useast2a-pve-0068/fa4d3d94aa8d46b994e97a046e09930a/?a=1988&br=3160&bt=1580&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFnkag3-I&l=2021122702105001022308301222BAE5E0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anc2djg6ZnduOjMzNzczM0ApZ2Y1OzNoOzw5NzY8OWdpOWdrZmtmcjQwMDBgLS1kMTZzc2EwYmE0MC9iMzY2LzBiLy46Yw%3D%3D&vl=&vr="
></video>
 <VideoFooter channel='jenob' descriptiion="it is cool" song="cool ka bap"/>
 <VideoSidebar/>
    </div>
  );
}
export default Video;
