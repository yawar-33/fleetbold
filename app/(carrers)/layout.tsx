"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/provider/Provider";
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import { Toaster } from "@/components/ui/toaster";
// import { MantineProvider } from "@mantine/core";
import ComingSoon from "@/components/Carousel/ComingSoon";
import NavbarAlt from "@/components/Navbar/NavbarAlt";
import Script from "next/script"; // Importamos el componente Script
import NavbarAltV2 from "@/components/Navbar/NavbarAltV2";
import CustomCursor from "@/components/Hero/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* Inyectamos el JSON-LD en el head */}
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is FleetBold and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FleetBold is an advanced fleet management platform designed to help businesses track vehicles in real time, optimize operations, and enhance security. Our platform connects with GPS tracking devices, including Moovetrax, Bouncie, and Tesla, to provide live vehicle location, performance insights, and operational analytics in one seamless interface."
                }
              },
              {
                "@type": "Question",
                "name": "What GPS tracking devices are compatible with FleetBold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FleetBold supports a wide range of GPS devices, including Moovetrax, Bouncie and more. Additionally, our Tesla API integration allows for advanced real-time tracking and data analysis."
                }
              },
              {
                "@type": "Question",
                "name": "What makes FleetBold better than other fleet management platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FleetBold stands out with cutting-edge AI technology, Tesla integration, and an intuitive user experience that simplifies fleet tracking. Our platform is built for flexibility, offering businesses cost-effective solutions, real-time insights, and superior customer support to streamline operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use Moovetrax or Bouncie with FleetBold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! FleetBold is fully compatible with Moovetrax and Bouncie GPS devices. We ensure seamless integration so users can continue using their existing devices while benefiting from FleetBold’s advanced fleet tracking and management features."
                }
              },
              {
                "@type": "Question",
                "name": "How much does FleetBold cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FleetBold offers flexible pricing plans based on the number of vehicles and required features. Contact us to get a custom quote tailored to your fleet’s needs."
                }
              },
              {
                "@type": "Question",
                "name": "Does FleetBold integrate with Tesla vehicles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! FleetBold provides one of the most advanced Tesla integrations, offering real-time tracking, battery status updates, trip history, and more. Plus, our platform is a cost-effective alternative to Tesla’s high-priced API access."
                }
              },
              {
                "@type": "Question",
                "name": "How do I access the FleetBold platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can access FleetBold via any web browser or mobile device, with no additional software installation required. Simply log in to our secure platform and start tracking your fleet instantly."
                }
              },
              {
                "@type": "Question",
                "name": "How does FleetBold protect my data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At FleetBold, data security is our top priority. We follow strict data protection protocols, ensuring that all fleet information is encrypted and stored securely. We never share your data with third parties without authorization."
                }
              },
              {
                "@type": "Question",
                "name": "Does FleetBold offer customer support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For now, we offer support exclusively via email. If you need assistance, feel free to contact us at support@fleetbold.com."
                }
              },
              {
                "@type": "Question",
                "name": "How can I start using FleetBold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FleetBold is currently in beta, and early access is available exclusively to users who sign up for our waiting list. By joining, you’ll get priority access to FleetBold before its official launch in mid-to-late March. Don’t miss out—sign up now to be among the first to experience the future of fleet management!"
                }
              }
            ]
          }
          `}
        </Script>
      </head>
      <body className="dark">
         <CustomCursor />
        <GoogleTagManager />
        {/* <MantineProvider> */}
          <Provider>
            {/* <NavbarAlt /> */}
            {/* <NavbarAltV2 /> */}
            {children}
          </Provider>
        {/* </MantineProvider> */}
        <Toaster />
      </body>
    </html>
  );
}
