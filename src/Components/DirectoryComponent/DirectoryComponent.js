import React, { Component } from "react";
import MenuItem from "../MenuItemComponent/MenuItemComponent";
import "./DirectoryComponent.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5
      }
    ]
  };

  render() {
    return (
      <div className="directory">
        {this.state.sections.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            img={item.imageUrl}
            size={item.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
