import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Spot", "track", "count"],  
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false
    
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="text-white h-full my-35 bg-[#000300]">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-[#000300] color-[#ffff] ">
        <p className="text-[#00df9a] font-bold p-2 text-xl">
          Spot, Count, Go: Your vehicle detection companion.
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-2xl font-bold md:py-3">
          Shaping the Future of Engineering and Technology
        </h1>
        <div className="flex justify-center items-center my-3">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Driving into the future:
          </p>

          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#d0546d] " ref={el}></span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Navigate traffic smarter with our vehicle type recognition.
        </p>
        <Link to="/getstarted">
          <button className="bg-[#00df9a] rounded-md hover:text-[crimson] hover:bg-[white] hover:border-[black]  w-[200px] py-3 text-black  font-medium my-6 mx-auto  ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
