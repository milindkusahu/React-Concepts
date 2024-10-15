import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CardSlide = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1727112658582-fdb2e08878d4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 bg-[#dadada7b] flex items-center justify-center rounded-full absolute bottom-[0%] lefft-1/2 -translate-x-[0%] -translate-y-[100%]"
        >
          <FaArrowRightLong size={".7em"} />
        </span>
      </div>
    </div>

    // <div>
    //   <h1>{val === false ? "BAHAR JAAO" : "MAAT JAAO"}</h1>
    //   {/* <button onClick={() => setVal(!val)}>Change</button> */}
    //   {/* Good Practice */}
    //   <button onClick={() => setVal(() => !val)}>Change</button>
    // </div>
  );
};

export default CardSlide;
