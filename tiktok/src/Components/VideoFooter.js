import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@jenob</h3>
        <p>This is some description</p>

        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({index}) => (
              <>
              <p>Iam the song</p>
              </>
            )}
          </Ticker>
         
        </div>
      </div>
    </div>
  );
}
export default VideoFooter;
