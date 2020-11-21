import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
      <h4 className="sidebar__subsHeading">SUBSCRIPTIONS</h4>
      <SidebarRow
        Avatar={Avatar}
        title="Innovation Hub"
        avatarUrl="https://yt3.ggpht.com/a/AATXAJwLRIPEy7Tgtp87t2cue2YBCArbvDP8f0RBrZJ6=s900-c-k-c0x00ffffff-no-rj"
      />
      <SidebarRow
        Avatar={Avatar}
        title="Motivation Zone"
        avatarUrl="https://pbs.twimg.com/profile_images/1209137353752743939/GIISUWGE_400x400.png"
      />
      <SidebarRow
        Avatar={Avatar}
        title="AI For Everyone"
        avatarUrl="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
      />
      <SidebarRow
        Avatar={Avatar}
        title="TikTok"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR4gjEO2KS8-oKQOBk_7IvRq6i3uBfs1mIPA&usqp=CAU"
      />
    </div>
  );
};

export default Sidebar;
