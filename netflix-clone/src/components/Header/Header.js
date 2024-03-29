import React from "react";
import "./header.css";
import NetFlixLogo from "../../assets/images/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <img src={NetFlixLogo} alt="NetFlix Logo" width="100" />
          <nav>
            <ul>
              <li>Netflix</li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Moives</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
