"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Navibar() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const size = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        if (window.innerWidth > 1500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const sideNav = [
    {
      text: "Menu",
    },

    {
      text: "Table",
    },

    {
      text: "Reservation",
    },

    {
      text: "Chat",
    },

    {
      text: "Dashboard",
    },

    {
      text: "Accounting",
    },

    {
      text: "Settings",
    },
  ];

  if (isVisible)
    return (
      <div
        className={` pl-2 ${
          isVisible &&
          "w-3/5 xl:w-1/6 lg:w-1/5 md:w-2/5 h-full lg:h-screen z-10 xl:relative lg:absolute absolute md:absolute bg-[#121315] "
        }`}
      >
        <div
          onClick={() => setIsVisible(!isVisible)}
          className={`absolute top-6 right-4 md:-right-6 flex justify-self-end`}
        >
          <FontAwesomeIcon icon={faClose} size="lg" />
        </div>
        <div
          className={`transition w-full h-full flex-col grow p-[20px] ml-2 ${
            isVisible ? "flex" : "hidden"
          }`}
        >
          <div className="flex my-2 flex-row w-full justify-between font-semibold items-center">
            <div className="flex text-lg md:text-xl">Wimpole EPOS</div>
          </div>

          <div className="mt-10">
            {sideNav && sideNav.length > 0 ? (
              sideNav.map((item) => (
                <div
                  key="index"
                  className="text-sm text-[#a1a2a4] p-[12px] rounded hover:text-white hover:bg-[#2d2d2d]"
                >
                  {item.text}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>

          <div className="grid gap-[10px] absolute block bottom-[30px]">
            <div className="p-[5px] rounded-full flex border-[1px] border-[#FFFFFF] bg-[#2d2d2d] items-center w-fit pr-[20px] text-sm">
              <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center text-xl bg-[#c1dbe8] text-[#000000] font-bold mr-[10px]">
                L
              </div>
              Leslie K.
            </div>
            <div className="p-[5px] rounded-full flex border-[1px] border-[#FFFFFF] bg-[#2d2d2d] items-center w-fit pr-[20px] text-sm">
              <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center text-xl bg-[#c1dbe8] text-[#000000] font-bold mr-[10px]">
                C
              </div>
              Camerom W.
            </div>
            <div className="p-[5px] rounded-full flex border-[1px] border-[#FFFFFF] bg-[#2d2d2d] items-center w-fit pr-[20px] text-sm">
              <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center text-xl bg-[#c1dbe8] text-[#000000] font-bold mr-[10px]">
                J
              </div>
              Jacob J.
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="absolute z-10 top-6 left-5 flex justify-self-end"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  }
}
