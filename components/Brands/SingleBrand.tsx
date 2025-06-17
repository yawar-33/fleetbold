import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id, width, height } = brand;

  return (
    <div
      className="animate_top mx-w-full relative flex items-center justify-center h-10 xs:w-full lg:w-[98px]"
      // style={{
      //   width: width ? width : "98px",
      //   height: height ? height : "40px",
      // }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden grayscale filter"
          src={image}
          alt={name}
          width={width ? parseInt(width) : 98}
          height={height ? parseInt(height) : 40}
        />
        <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block grayscale filter"
          src={imageLight}
          alt={name}
          width={width ? parseInt(width) : 98}
          height={height ? parseInt(height) : 40}
        />
      </a>
    </div>
  );
};

export default SingleBrand;
