import React from "react";

export default function Food(props) {
  const style = {
    left: `${props.food[0]}%`,
    top: `${props.food[1]}%`,
  };

  return <div className="snake-food" style={style}></div>;
}
