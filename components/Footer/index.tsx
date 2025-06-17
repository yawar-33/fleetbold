"use client";
 
 
 
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer/Footer";

const DownloadAppQR = dynamic(() => import('../DownloadApp/DownloadAppQR'), { ssr: false });


const FooterLayout = () => {
  return (
    <>
        <Footer></Footer>
      
    </>
  );
};

export default FooterLayout;
