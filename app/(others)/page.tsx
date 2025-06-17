"use client";


import ContactUs from "@/components/Contact/ContactUs";
import FAQ from "@/components/FAQ/FAQ2";
// import { FeaturesSection } from "@/components/Features/FeaturesSection";
import Footer from "@/components/Footer/Footer";



import { NextUIProvider } from "@nextui-org/system";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import HowItWorksSection from "@/components/Hero/HowItWork";
import ServicesSection from "@/components/Services/Services";
import MemberShipBenefitsCard from "@/components/MemberShipBenefits/MemberShipBenefits";
import PixelLabHero from "@/components/Hero/AnimatedCanvasBackground";
import { ExactStarSeparator } from "@/components/Seperator/Separators";
import NavbarAltV2 from "@/components/Navbar/NavbarAltV2";

export default function Home() {
  return (
    <NextUIProvider>
      <NavbarAltV2 />
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen  px-8  sm:px-20 ">
        <main className="flex flex-col gap-1 row-start-2 items-center sm:items-start">
          <div className="relative w-full max-h-min">
            <PixelLabHero />
            <ExactStarSeparator />
          </div>

          <div className="relative w-full">
            <HowItWorksSection />
            <ServicesSection />
            <MemberShipBenefitsCard />
            {/* <FeaturesSection></FeaturesSection> */}
            {/* <WobbleCardGrid></WobbleCardGrid> */}
            {/* <WorldMapDemo></WorldMapDemo> */}
            {/* <TeamSection teamMembers={testimonials}></TeamSection> */}
            <Testimonial />
            {/* <TestimonialCarousel></TestimonialCarousel> */}


            <Pricing />
            {/* <Brands /> */}
            <ContactUs></ContactUs>
            <FAQ />

          </div>

        </main>
      </div>
      <Footer></Footer>

    </NextUIProvider>
  );
}
