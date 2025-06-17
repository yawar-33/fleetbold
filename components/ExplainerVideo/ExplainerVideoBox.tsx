"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { usePostCaptureUser } from "@/queries/PostCaptureUser";
import { APP_STORE_URL, SIGNIN_AUTH_URL, SIGNUP_AUTH_URL } from "@/app/(others)/config";
import { useRouter, useSearchParams } from "next/navigation";

import dynamic from 'next/dynamic';
 
import {Kalam } from "next/font/google";
const kalam = Kalam({ subsets: ["latin-ext"] ,weight:"300"});

const DownloadAppQR = dynamic(() => import('../DownloadApp/DownloadAppQR'), { ssr: false });


const ExplainerVideoBox = ({width, showPointer=false, pointerText}:any) => {
  const postCaptureUser = usePostCaptureUser();
  const router = useRouter();

  return (
    <>
    {/* <Box className={'mx-auto max-w-c-1235 md:px-8 xl:px-0'} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100% !important'}}>

   
              {(showPointer && pointerText) && <>
            <Box gap={0.5} sx={{display:'flex', flexDirection:'row', margin:1, width:'100% !important', justifyContent:'center'}}>
             
                <Image 
               width={50} height={50} alt="title"
              src={'https://cdn.prod.website-files.com/642c9095b374127dfdae1169/6646170aadc475d0a8e59283_Vector.svg'}
              ></Image>
              <p  className={`${kalam.className}`}  style={pointerStyle}>{pointerText}</p>
            </Box>
            </>}
          <Box sx={{borderRadius:10, overflow:'hidden', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '100% !important'}}>
         
            <script src="https://fast.wistia.com/embed/medias/3pwdfeo5k4.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
            <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <div className="wistia_embed wistia_async_3pwdfeo5k4 seo=false videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                  <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                    <Image src="https://fast.wistia.com/embed/medias/3pwdfeo5k4/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" onLoad={(e:any) => e.currentTarget.parentNode.style.opacity = '1'}  />
                  </div>
                </div>
              </div>
            </div>
          </Box>
          </Box> */}
    </>
  );
};


const pointerStyle ={
    color: "rgb(59, 130, 246)",
    marginBottom: 0,
    // fontFamily:  "Kalam,sans-serif",
    fontSize:"20px",
    fontWeight:'600',
    fontStyle: "italic"
}

export default ExplainerVideoBox;
