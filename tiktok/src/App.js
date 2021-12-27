import "./App.css";
import Video from "./Components/Video";
import VideoFooter from "./Components/VideoFooter";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url='https://v16-webapp.tiktok.com/23880cabfbe060e69e9cc926d093ac87/61ca56a2/video/tos/useast2a/tos-useast2a-ve-0068c003/34539573e47449b19885c94732c51a58/?a=1988&br=2550&bt=1275&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFnkag3-I&l=202112271813130102230650520C274EE8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdkbjw6ZnBsOTMzNzczM0ApaGk7Ojw0Nzs4N2Y3OmQ6N2dzYV4wcjRfaWZgLS1kMTZzc2AuMl5jY14vLy9hLjNgYjU6Yw%3D%3D&vl=&vr=git'channel='jenob' descriptiion='nice video' song='i dont know' likes={124} messages={234} shares={320} />
        <Video url='https://v16-webapp.tiktok.com/0eff00e746391824ad2e3e2d5db80a6b/61ca56a4/video/tos/useast2a/tos-useast2a-ve-0068c003/3233205872184375990ac6ed965b52ff/?a=1988&br=4308&bt=2154&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFnkag3-I&l=202112271813130102230650520C274EE8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ankzczQ6ZmtsOjMzNzczM0ApaGg7aWc5Njs1N2hnOzNmaWctZm9kcjRnYzFgLS1kMTZzcy4zNS8wL2AzYy4vY2M0Xi86Yw%3D%3D&vl=&vr='channel='jenob' descriptiion='nice video' song='i dont know' likes={124} messages={234} shares={320} />
      </div>
    </div>
  );
}

export default App;
