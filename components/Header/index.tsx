"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { SIGNIN_AUTH_URL, SIGNUP_AUTH_URL } from "@/app/(others)/config";
 
import NavbarAlt from "../Navbar/NavbarAlt";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();



  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const [isVisible, setIsVisible] = useState(false);


  
  function scrollToElement(id:any ) {
    if (typeof document !== 'undefined') {
     
      const element = document.getElementById(id);
      //  alert(id)
      if (element) {
       
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
       
      }
    }
  
}

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <></>
  );
};

// w-full delay-300

export default Header;
