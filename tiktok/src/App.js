import "./App.css";
import Video from "./Components/Video";
import VideoFooter from "./Components/VideoFooter";

function App() {
  return (
    <div className="app">
      <h1>tiktok app</h1>
      <div className="app__videos">
        <Video />
        <Video />
        <VideoFooter/>
      </div>
    </div>
  );
}

export default App;
