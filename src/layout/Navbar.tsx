// @ts-ignore
import { MenuIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import Sidebar from "./Sidebar"

const Navbar = (props: any) => {
  const exclude = ["/auth/register", "/auth/login", "/"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const store = useStore();
  // const { server } = store.getState();

  // const user: any = server.user;
  const [show, setShow] = useState(false);
  const [showServices, setShowServices] = useState(false);



  useEffect(() => {}, []);

  return (
    <>

     <div
      className={` sticky z-40 bg-white top-0 h-20   ${
        props.title == "dashboard" ? "lg:ml-[25%] xl:ml-[20%] " : " "
      } `}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setImages={props.setImages}
        images={props.images}
        text={props.text}
        setText={props.setText}
      />

      <div className="px-6 flex w-full items-center py-2 mt-2  justify-between space-x-4 2xl:container">
        {/* <img src="/logo.svg" className="w-28 h-28 " /> */}

        <div className="flex items-center space-x-4">
        <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white/80 backdrop-blur-md drop-shadow-md cursor-pointer"
          >
            <BiMenu className="w-8 h-8" />
          </div>
        <p className="text-2xl font-medium ">{props.title}</p>
        </div>

        <div
          id="bgIcon"
          onClick={() => setShow(!show)}
          className={`focus:outline-none lg:hidden  text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center lg:hidden cursor-pointer`}
        >
          <svg
            className={`${show ? "hidden" : ""}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" transform duration-150"
              d="M4 6H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className=" transform duration-150"
              d="M4 18H20"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`${show ? "block" : "hidden"}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

    </div>
    </>
  );
};

export default Navbar;
