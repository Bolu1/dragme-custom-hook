import React, { useState } from "react";
// @ts-ignore
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { BiImages } from "react-icons/bi";
import AddText from "../components/AddText";

const Sidebar = ({
  setIsSidebarOpen,
  isSidebarOpen,
  setImages,
  images,
  text,
  setText
}: {
  setIsSidebarOpen: any;
  isSidebarOpen: any;
  setImages: any;
  images: any;
  text: any;
  setText: any
}) => {
  const variants = {
    open: { opacity: 1, x: "0", transition: { duration: 0.4 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.4 } },
  };

  const [fileName, setFileName] = useState(null);
  
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    // @ts-ignore
    hiddenFileInput?.current?.click();
  };

  const onChangeFile = async(e: any) => {
    const base = e.target.files[0];
    const file = await convert64(base);
    let updatedskill = [...images, file];
    setImages(updatedskill);
  };

  const convert64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      {" "}
      {isSidebarOpen && (
        <div className="bg-black/80 backdrop-blur-md drop-shadow-md transparent-background z-[60] fixed">
          <motion.div
            variants={variants}
            initial={"closed"}
            animate={"open"}
            style={{ width: "20vw" }}
            className="fixed top-0 bottom-0 left-0 h-[100vh] z-[60] max-w-[400px]  h-screen bg-white backdrop-blur-md fixed "
          >
            <div className="w-full mt-4 h-10 px-4 flex justify-end">
              <button
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                className=""
              >
                <MdClose className="w-8 h-8 text-gray-600" />
              </button>
            </div>
            <div
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "90vh",
              }}
              className="w-full px-4 px-8 items-center space-y-4 "
            >
              <div
                style={{ marginBottom: "4px", marginTop: "0px" }}
                className="flex flex-col h-full "
              >
                <p style={{ marginBottom: "4px" }} className="py-2 text-[30px]">
                  {"     "}Rotimi work
                </p>

                <div
                  className=" space-x-4 4w-[30px] cursor-pointer "
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    // router.push("/dashboard");
                  }}
                >
                                      <div
                      className="bg-black px-4 py-4 text-base font-normal cursor-pointer "
                      onClick={handleClick}
                    >
                      <div className="flex justify-center items-center w-full my-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                          />
                        </svg>
                      </div>
                      <span className="flex justify-center text-center text-white text-base">
                        Upload Image
                      </span>
                    </div>
                    <input
                      className="hidden "
                      type="file"
                      onChange={(e) => onChangeFile(e)}
                      ref={hiddenFileInput}
                      required
                    />
                </div>

                
                <div
                  className=" space-x-4 4w-[30px] cursor-pointer "
                  style={{ marginBottom: "0px" }}
                  onClick={() => {
                    // router.push("/dashboard");
                  }}
                >
                    <AddText setText={setText} text={text}/>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
