import "./App.css";
import Video from "./Components/Video";
import VideoFooter from "./Components/VideoFooter";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
