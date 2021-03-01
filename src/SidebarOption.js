import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, text, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
