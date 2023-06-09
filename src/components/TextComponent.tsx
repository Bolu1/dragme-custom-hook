import React, { useState } from "react";
import useDragger from "../hooks/useDragger";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const TextComponent: React.FC = (props: any) => {
  
  const [fontSize, setFontSize] = useState("40px")
  const [showMenu, setShowMenu] = useState(true);
  const [color, setColor] = useState("black")
  useDragger(`${props.index}`);

  return (

    <div 
    onMouseEnter={() => {
      setShowMenu(true);
    }}
    id={props.index}
    className={`${
      props.text != ""
        ? "text left-0 cursor-move"
        : "text right-0 cursor-move"
    }`}
    >


{showMenu && props.text != "" && (
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
            onClick={()=>{props.removeText(props.index)}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
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
            <p>
              Font size
            </p>
            <Slider value={fontSize} action={setFontSize} min={40} max={200}/>
          </div>

          <div className="mt-6">
            <p>
              Color
            </p>

            <div className="grid grid-cols-2 px-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-2 ">

            <ColorPicker setColor={setColor} color="red"/>
            <ColorPicker setColor={setColor} color="pink"/>
            <ColorPicker setColor={setColor} color="blue"/>
            <ColorPicker setColor={setColor} color="black"/>
            <ColorPicker setColor={setColor} color="green"/>
            
            <ColorPicker setColor={setColor} color="yellow"/>
            <ColorPicker setColor={setColor} color="gray"/>
            <ColorPicker setColor={setColor} color="cyan"/>

            </div>
          </div>

          </div>
        </div>
      )}


        <p 
    style={{fontSize:fontSize, color: color}}
        className=" font-bold cursor-move"
        >
          {props.text}
          </p>
        
    </div>

  )
};

export default TextComponent;