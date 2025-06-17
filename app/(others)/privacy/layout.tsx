
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// 1. import `NextUIProvider` component
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FleetBold - Ultimate Fleet Management Solution for the Car Rental Industry",
  description: "Optimize your car rental business with FleetBold, the ultimate fleet management solution. Track, manage, and grow your fleet efficiently with cutting-edge tools designed for the car rental industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
         <head>
        {/* Meta tag to prevent zoom */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
   
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      
      </body>
      
    </html>
  );
}
