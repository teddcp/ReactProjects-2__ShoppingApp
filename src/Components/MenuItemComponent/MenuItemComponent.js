import React from "react";
import "./menuItemComponent.scss";

function MenuItem(props) {
  return (
    <div className={`${props.size}  menu-item`}>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="background-image "
      />

      <div className="content">
        <h1 className="title">{props.title}</h1>
        <h3 className="subtitle">Shop Now</h3>
      </div>
    </div>
  );
}
export default MenuItem;
