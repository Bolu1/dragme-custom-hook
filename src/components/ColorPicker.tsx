import React, { useState, useEffect } from "react";

const ColorPicker = (props:any) => {
  const [value, onChange] = useState(props.min);



  return (
    <div className="slider-parent">
      <div 
      onClick={()=>{props.setColor(props.color)}}
    style={{background:props.color}}
      className=" w-14 h-10"
      >

      </div>
    </div>
  );
};

export default ColorPicker;
