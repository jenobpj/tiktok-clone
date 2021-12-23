import "./video.css";
import React, { useRef, useState } from "react";
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
        src="https://v16-webapp.tiktok.com/3e63db3f42d9f246e3c7f37ec8e10823/61c54f72/video/tos/useast2a/tos-useast2a-ve-0068c004/aeb72f58b8b84eeb90bd975680a674a4/?a=1988&br=2492&bt=1246&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFnkag3-I&l=202112232240520102230720350C66F88E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mztvbzk6Zjk6NjMzNzczM0ApZWY0aWc8Ozs0Nzs2PDpmZWdkajFtcjRvYnNgLS1kMTZzc2MzYl81YjMzLzJeLzYuNS46Yw%3D%3D&vl=&vr=
        "
      ></video>
    </div>
  );
}
export default Video;
