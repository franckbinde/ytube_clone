import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ selected, Icon, title, Avatar, avatarUrl }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {Icon ? (
        <Icon className="sidebarRow__icon" />
      ) : (
        <Avatar src={avatarUrl} className="sidebarRow__avatar" />
      )}

      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
