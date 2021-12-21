import "./App.css";
import Video from "./Components/Video";

function App() {
  return (
    <div className="app">
      <h1>tiktok app</h1>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
