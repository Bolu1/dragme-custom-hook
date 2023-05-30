import React from "react";
import shirt from "../assets/shirt.jpg"

const Item: React.FC = () => {
  
  return (
    <div className=" w-[100%] h-[100%]">
        <img 
        src={shirt}
        className="w-[100%] h-[100%]"
        />
        
    </div>
  )
};

export default Item;