import "./Videosidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
function videoSidebar() {
  return <div className="videoSidebar">
     <div className="videoSidebar__button">
       <FavoriteBorderIcon/>
       <p>200</p>
     </div>
     <div className="videoSidebar__button">
       <MessageIcon/>
       <p>300</p>
     </div>
     <div className="videoSidebar__button">
       <ShareIcon/>
       <p>400</p>
     </div>
  </div>;
}
export default videoSidebar;
