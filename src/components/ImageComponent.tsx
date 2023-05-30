import React, { useState } from "react";
import useDragger from "../hooks/useDragger";
import Slider from "./Slider";

const ImageComponent: React.FC = (props: any) => {
  useDragger(`${props.index}`);
  const [showMenu, setShowMenu] = useState(true);
  const [width, setWidth] = useState("150px");
  const [height, setHeight] = useState("150px");

  console.log(height, width);

  return (
    <div
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      // onMouseLeave={() => {
      //   setShowMenu(false);
      // }}
      id={props.index}
      style={{ width: width, height: height }}
      className={`image cursor-move flex`}
    >
      {showMenu && (
        <div className="fixed right-0  w-[300px] h-[300px] bg-white drop-shadow-2xl p-2">
          <div className=" flex justify-between">

            <svg
            onClick={()=>{setShowMenu(false)}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 z-10 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <svg
              onClick={() => {
                props.removeImage(props.index);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>

          <div>
            <div>
              <p>Width</p>
              <Slider value={width} action={setWidth} min={150} max={500} />
            </div>

            <div>
              <p>Height</p>
              <Slider value={height} action={setHeight} min={150} max={500} />
            </div>
          </div>
        </div>
      )}

      <img src={props.image} className="cursor-move w-[100%] h-[100%]" />
    </div>
  );
};

export default ImageComponent;
