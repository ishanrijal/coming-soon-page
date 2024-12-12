import React, { Component } from "react";

export default class Snake extends Component {
  render() {
    return (
      <div>
        {this.props.Snakedot.map((dots, i) => {
          const style = {
            left: `${dots[0]}%`,
            top: `${dots[1]}%`,

          };
          return <div key={i} className="snake" style={style}></div>;
        })}
      </div>
    );
  }
}
