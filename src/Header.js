import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const [inputSearch, setInputSearch] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputSearch) {
      history.push(`/search/${inputSearch}`);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onKeyPress={handleKeyPress}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search (will always return the same results)"
          type="text"
          className="header__inputLeft"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon  " />
        <AppsIcon className="header__icon   " />
        <NotificationsIcon className="header__icon  " />
        <Avatar
          className="header__icon"
          alt="woman"
          src="https://i.pinimg.com/originals/d5/c3/0d/d5c30db488c25c7742acb05310d463e4.png"
        />
      </div>
    </div>
  );
};

export default Header;
