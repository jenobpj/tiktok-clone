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
        src="https://v16-webapp.tiktok.com/23880cabfbe060e69e9cc926d093ac87/61ca56a2/video/tos/useast2a/tos-useast2a-ve-0068c003/34539573e47449b19885c94732c51a58/?a=1988&br=2550&bt=1275&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFnkag3-I&l=202112271813130102230650520C274EE8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdkbjw6ZnBsOTMzNzczM0ApaGk7Ojw0Nzs4N2Y3OmQ6N2dzYV4wcjRfaWZgLS1kMTZzc2AuMl5jY14vLy9hLjNgYjU6Yw%3D%3D&vl=&vr=git"
></video>
 <VideoFooter channel='jenob' descriptiion="it is cool" song="cool ka bap"/>
 <VideoSidebar/>
    </div>
  );
}
export default Video;
