import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
function VideoFooter({channel,descriptiion,song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{descriptiion}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({index}) => (
              <>
              <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record"
      src="https://static.thenounproject.com/png/934821-200.png"/>
    </div>
  );
}
export default VideoFooter;
