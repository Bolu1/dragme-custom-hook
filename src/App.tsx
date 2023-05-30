import React, { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import PinkBox from "./components/PinkBox";
import SmallCircle from "./components/SmallCircle";
import Item from "./components/Item";
import ImageComponent from "./components/ImageComponent";
import TextComponent from "./components/TextComponent";
import Navbar from "./layout/Navbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [images, setImages] = useState([]);
  const [text, setText] = useState([""]);

  const removeImage = (index: number) => {
      console.log(images)
      console.log("sd", index)
      images.splice(index, 1);
      let ui = [...images];
      console.log(ui)
      setImages(ui);
    }

    const removeText = (index: number) => {
      console.log(text)
      console.log("sd", index)
      text.splice(index, 1);
      let ui = [...text];
      console.log(ui)
      setText(ui);
    }




  return (
    <div>
      {/* <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/> */}
      <Navbar
        setImages={setImages}
        images={images}
        text={text}
        setText={setText}
      />
      <main className="bg-gray-200">
        <div className="container ">
          <Item />
          {/* <PinkBox />
        <Circle /> */}
          {images.map((item, index) => (
            // @ts-ignore
            <ImageComponent image={item} index={index} removeImage={removeImage}/>
          ))}

          {text.map((item, index) => (
            // @ts-ignore
            <TextComponent text={item} index={index}  removeText={removeText}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
