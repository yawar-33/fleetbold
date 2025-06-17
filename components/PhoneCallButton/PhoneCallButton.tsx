"use client"
import { useEffect, useState } from "react";

export default function PhoneCallButton() {
  const [isVisible, setIsVisible] = useState(false);

   

  return (
    <div className="z-[99] bottomMiddleButton2" >
      {isVisible && (
        <div
          style={{borderRadius:20, overflow:'hidden'}}
          onClick={()=>console.log(123)}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
    </div>
  );
}
