"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { usePostCaptureUser } from "@/queries/PostCaptureUser";
import { APP_STORE_URL, SIGNIN_AUTH_URL, SIGNUP_AUTH_URL } from "@/app/(others)/config";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from 'react-hook-form';
import DownloadApp from "../DownloadApp/DownloadApp";
import diamondSvg from "../../assets/svg/diamond_2.svg";
import appointmentSvg from "../../assets/svg/appointment_2.svg";
import approvedCallSvg from "../../assets/svg/approved-call.svg";
import dynamic from 'next/dynamic';
import ExplainerVideoBox from "./ExplainerVideoBox";

const DownloadAppQR = dynamic(() => import('../DownloadApp/DownloadAppQR'), { ssr: false });
 

const ExplainerVideo = () => {
  const postCaptureUser = usePostCaptureUser();
  const router = useRouter();

  return (
    <>
      <section  className="overflow-hidden md:pb-20 sm:pb-0  xl:pb-20 ">
        <div className="mx-auto max-w-c-1390 ">
         <ExplainerVideoBox></ExplainerVideoBox>
        </div>
      </section>
    </>
  );
};

export default ExplainerVideo;
