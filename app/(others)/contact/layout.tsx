
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
  title: "FleetBold - Contact Us",
  description: "Contact Fleetbold team for any queries or feedback. We are here to help you with any questions you may have about our fleet management solution.",
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
