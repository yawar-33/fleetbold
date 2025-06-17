"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CAPITALIZED_BUSINESS_NAME } from "@/app/(others)/config";
import QRCode from "react-qr-code";
import QRCodeStyling, {
    DrawType,
    TypeNumber,
    Mode,
    ErrorCorrectionLevel,
    DotType,
    CornerSquareType,
    CornerDotType,
    Options
} from "qr-code-styling";

const DownloadAppQR = ({ appStoreUrl, showHeader = true }: any) => {
    const [options, setOptions] = useState<Options>({
        width: 150,
        height: 150,
        type: 'svg' as DrawType,
        data: appStoreUrl,
        image: '/favicon.ico',
        margin: 5,
        qrOptions: {
            typeNumber: 0 as TypeNumber,
            mode: 'Byte' as Mode,
            errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
        },
        imageOptions: {
            hideBackgroundDots: true,
            imageSize: 0.5,
            margin: 0,
            crossOrigin: 'anonymous',
        },
        dotsOptions: {
            color: '#222222',
            type: 'rounded' as DotType
        },
        backgroundOptions: {
            color: '#dbeafe',
        },
        cornersSquareOptions: {
            color: '#222222',
            type: 'extra-rounded' as CornerSquareType,
        },
        cornersDotOptions: {
            color: '#222222',
            type: 'dot' as CornerDotType,
        }
    });

    const [fileExt, setFileExt] = useState<any>("svg");
    const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            qrCode.append(ref.current);
        }
    }, [qrCode, ref]);

    useEffect(() => {
        if (!qrCode) return;
        qrCode.update(options);
    }, [qrCode, options]);

    return (
        <div className="md:w-2/3 dark:border-gray-700">
            {showHeader && <h5 className="mb-2 text-itemtitle2 font-bold text-gray-900 dark:text-white">Download {CAPITALIZED_BUSINESS_NAME} App</h5>}
            <div className="flex flex-row gap-2 justify-center items-center">
                <div style={{ height: "auto", maxWidth: 150, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={appStoreUrl}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <p className="text-base text-gray-500 sm:text-md dark:text-gray-400">
                    Connect with buyers and sellers from your pocket. Download the {CAPITALIZED_BUSINESS_NAME} App for iOS.
                </p>
            </div>
        </div>
    );
};

export default DownloadAppQR;
