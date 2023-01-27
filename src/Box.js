import { useState } from "react";

export default function Box() {
  const [color, setColor] = useState(
    "#" + Math.random().toString(16).substr(-6)
  );
  const changeColor = () => {
    setColor("#" + Math.random().toString(16).substr(-6));
  };
  return (
    <div
      onClick={changeColor}
      className="box"
      style={{ backgroundColor: color }}
    ></div>
  );
}
