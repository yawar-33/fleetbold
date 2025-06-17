import { APP_STORE_URL } from "@/app/(others)/config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export const AcmeLogo = () => {
  return (
    <img
      style={{ height: "30px", objectFit: "contain" }}
      src="/assets/png/branding/logo4.png"
    ></img>
  );
};

export default function NavbarAlt() {
  return (
    <Navbar className="navbar-h" maxWidth="2xl">
      <NavbarBrand style={{ justifyContent: "flex-start" }}>
        <Link href={"/"}>
          <AcmeLogo />
        </Link>
      </NavbarBrand>
      {/* <div className="fixed left-0 w-full">
        <div className="right-2 z-50"> */}
      <div className="hola sm:w-3/4 md:w-3/4">
        <Marquee speed={100} gradient={false} className="">
          🚀 Exciting News! We’re in Development – Coming Soon! Stay Tuned! 🔧
        </Marquee>
      </div>
      {/* </div>
      </div> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href={APP_STORE_URL}>Get the app</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>



  );
}
