"use client";

import Brands from "@/components/Brands";
import { WobbleCardGrid } from "@/components/Cards/WobbleCardGrid";
import ComingSoon from "@/components/Carousel/ComingSoon";
import { TestimonialCarousel } from "@/components/Carousel/TestimonialCarousel";
import TestimonialNew from "@/components/Carousel/TestimonialNew";

import ContactUs from "@/components/Contact/ContactUs";
import FAQ from "@/components/FAQ/FAQ2";
// import { FeaturesSection } from "@/components/Features/FeaturesSection";
import Footer from "@/components/Footer/Footer";

import HeroSectionImageWithReviews from "@/components/Hero/Hero";

import NavbarAlt from "@/components/Navbar/NavbarAlt";
import TeamSection from "@/components/TeamMembers/team";

import { WorldMapDemo } from "@/components/WorldMap/WorldMapDemo";
import { NextUIProvider } from "@nextui-org/system";
import { Metadata, ResolvingMetadata } from "next";
import Marquee from "react-fast-marquee";
import { InstagramEmbed } from "react-social-media-embed";
import { DOMAIN } from "./config";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import HowItWorksSection from "@/components/Hero/HowItWork";
import ServicesSection from "@/components/Services/Services";
import MemberShipBenefitsCard from "@/components/MemberShipBenefits/MemberShipBenefits";
import PixelLabHero from "@/components/Hero/AnimatedCanvasBackground";
import { ExactStarSeparator } from "@/components/Seperator/Separators";
import NavbarAltV2 from "@/components/Navbar/NavbarAltV2";



// export async function generateMetadata(
//   { params, searchParams }: any,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params

//   //post?.banner?.url
//   return {
//     title: 'Fleetbold - Fleet management and tracking for Tesla, Bouncie, OEM, and Turo Hosts',
//     description: 'Seamlessly manage your rental car fleet with real time tracking, instant notifications, and comprehensive fleet management tools. Fully compatible with Bouncie devices and Tesla vehicles. for efficient project management.' ,
//   //   openGraph: {
//   //     images: ['/some-specific-page-image.jpg', ...previousImages],
//   //   },
//   openGraph: {
//     images: {
//       // url: post?.banner?.url? post?.banner?.url : `${DOMAIN}/images/logo/logo.png`
//       url: `${DOMAIN}/images/logo/logo.png`
//     }
//   }
//   }
// }

//assets/jpg/live-gps.jpg
const testimonials = [
  {
    id: 1,
    quote:
      "With an unstoppable drive, Roberto fosters a culture where creativity, bold ideas, and breakthrough solutions shape the future. At FleetBold, he leads with passion, turning challenges into opportunities and motivating his team to think big, move fast, and build smarter technology that revolutionizes the industry.",
    name: "Roberto Lima",
    designation: "CEO",
    email: "robertol@fleetbold.com",
    src: "/assets/avatar/roberto.jpg",
  },
  {
    id: 2,
    quote:
      "A fearless visionary, Osiel turns the impossible into reality. With 12+ years of experience and expertise in 10+ programming languages, he transforms the most complex challenges into innovative solutions. As Founder and CTO of FleetBold, he doesn’t just build technology—he reinvents it. He has also founded tech companies like Advertizip, proving his ability to create, scale, and lead disruptive projects. The harder the challenge, the more it drives him—because for Osiel, there are no limits.",
    name: "Osiel Jo",
    designation: "CTO",
    email: "osielj@fleetbold.com",
    src: "/assets/avatar/osiel.jpg",
  },
  {
    id: 3,
    quote:
      "As Marketing Director at FleetBold, Jesús leads with passion, transforming concepts into powerful brand narratives and cutting-edge growth strategies. Always thinking outside the box, he pushes boundaries to ensure FleetBold stands out in the industry—because for Jesús, marketing isn’t just strategy, it’s an art of innovation.",
    name: "Jesus Gonzalez",
    designation: "Marketing Director",
    email: "jesusg@fleetbold.com",
    src: "/assets/avatar/jesus.jpg",
  },
  {
    id: 4,
    quote:
      "With 5 years of experience in Artificial Intelligence and Machine Learning, Ernesto is a passionate and detail-oriented engineer dedicated to developing cutting-edge AI solutions. His precision and deep expertise in data modeling, predictive analytics, and automation help drive innovation at FleetBold. Ernesto’s commitment to excellence ensures that every AI-driven feature is optimized for performance, accuracy, and real-world impact.",
    name: "Ernesto Torres",
    designation: "AI/ML Engineer",
    email: "ernestot@fleetbold.com",
    src: "/assets/avatar/ernesto.png",
  },
  {
    id: 5,
    quote:
      "At FleetBold, she plays a key role in designing user-centric solutions that enhance fleet management, ensuring that our platform is not only powerful but also easy to navigate. Her expertise in user research, wireframing, prototyping, and interactive design helps translate complex functionalities into simple, visually appealing experiences.",
    name: "Yanela Dorta",
    designation: "UX/UI Design & User Experience",
    email: "yanelad@fleetbold.com",
    src: "/assets/avatar/yanela.jpg",
  },
  {
    id: 6,
    quote:
      "Jessica is an experienced sales and business development leader with a strong track record in Asian, Arab, and Latin American markets. With 21 years of experience, she has successfully led B2B sales, strategic partnerships, and market expansion across diverse regions. At FleetBold, she drives global growth by identifying opportunities, building key relationships, and delivering tailored solutions that help businesses optimize their fleet operations.",
    name: "Jessica Diaz",
    designation: "Business Development & Sales Manager",
    email: "Not Provided",
    src: "/assets/avatar/jessica.jpg",
  },
  {
    id: 7,
    quote:
      "Claudia is a Master in Clinical Social Work and an experienced Human Resources Director, specializing in employee well-being, workplace culture, and talent management. She leads recruitment, employee relations, and diversity initiatives, ensuring a positive and high-performing work environment. With expertise in mental health, conflict resolution, and leadership development, Claudia implements policies that support both business success and employee well-being. Her commitment to ethical HR practices and organizational excellence helps FleetBold remain a great place to work.",
    name: "Claudia Guell",
    designation: "HR",
    email: "claudiag@fleetbold.com",
    src: "/assets/avatar/claudia.jpg",
  },
  {
    id: 8,
    quote:
      "As Creative Director at FleetBold, Ruben drives the design, branding, and multimedia vision, ensuring a compelling and cohesive visual identity. With a passion for innovation and an eye for detail, he leads the creation of high-impact graphics, videos, and digital experiences that enhance FleetBold’s brand presence. Through strategic storytelling and design excellence, Ruben transforms ideas into engaging visuals that captivate users and elevate the brand.",
    name: "Ruben Delgado",
    designation: "Creative Director",
    email: "rubend@fleetbold.com",
    src: "/assets/avatar/ruben.jpg",
  },
  {
    id: 9,
    quote:
      "A U.S. military veteran and former Special Agent at Homeland Security, he has dedicated his career to safeguarding critical assets and enforcing high-level security protocols. His expertise spans cyber defense, data integrity, and ethical security management, ensuring that FleetBold’s sensitive information remains protected. Antonio is responsible for implementing top-tier security measures, risk mitigation strategies, and compliance protocols, reinforcing FleetBold’s position as a secure and trusted fleet management platform.",
    name: "Antonio Rivera",
    designation: "CSO",
    email: "antonior@fleetbold.com",
    src: "/assets/avatar/antonio.jpg",
  },
];

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
          <ServicesSection/>
          <MemberShipBenefitsCard/>
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
