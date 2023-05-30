import React, { useState, useEffect } from "react";

const Slider = (props:any) => {
  const [value, onChange] = useState(props.min);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      // @ts-ignore
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div className="slider-parent">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={value}
        // onChange={({ target: { value: radius } }) => {
        //   // @ts-ignore
        //   onChange(radius);
        // }}
        onChange={(e)=>{
            props.action(`${e.target.value}px`)
            onChange(e.target.value)
        }}
      />
      <div className="buble">{value}</div>
    </div>
  );
};

export default Slider;
