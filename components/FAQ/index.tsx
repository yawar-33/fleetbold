import FAQ from "@/components/FAQ/FAQComponent";
import { FAQItem } from "@/components/FAQ/FAQComponent";
import React from 'react';

const faqs: FAQItem[] = [
  {
    question: "What is FleetBold and how does it work?",
    answer: "FleetBold is an advanced fleet management platform designed to help businesses track vehicles in real time, optimize operations, and enhance security. Our platform connects with GPS tracking devices, including Moovetrax, Bouncie, and Tesla, to provide live vehicle location, performance insights, and operational analytics in one seamless interface."
  },
  {
    question: "What GPS tracking devices are compatible with FleetBold?",
    answer: "FleetBold supports a wide range of GPS devices, including Moovetrax, Bouncie and more. Additionally, our Tesla API integration allows for advanced real-time tracking and data analysis."
  },
  {
    question: "What makes FleetBold better than other fleet management platforms?",
    answer: "FleetBold stands out with cutting-edge AI technology, Tesla integration, and an intuitive user experience that simplifies fleet tracking. Our platform is built for flexibility, offering businesses cost-effective solutions, real-time insights, and superior customer support to streamline operations."
  },
  {
    question: "Can I use Moovetrax or Bouncie with FleetBold?",
    answer: "Yes! FleetBold is fully compatible with Moovetrax and Bouncie GPS devices. We ensure seamless integration so users can continue using their existing devices while benefiting from FleetBold’s advanced fleet tracking and management features."
  },
  {
    question: "How much does FleetBold cost?",
    answer: "FleetBold offers flexible pricing plans based on the number of vehicles and required features. Contact us to get a custom quote tailored to your fleet’s needs."
  },
  {
    question: "Does FleetBold integrate with Tesla vehicles?",
    answer: "Yes! FleetBold provides one of the most advanced Tesla integrations, offering real-time tracking, battery status updates, trip history, and more. Plus, our platform is a cost-effective alternative to Tesla’s high-priced API access."
  },
  {
    question: "How do I access the FleetBold platform?",
    answer: "You can access FleetBold via any web browser or mobile device, with no additional software installation required. Simply log in to our secure platform and start tracking your fleet instantly."
  },
  {
    question: "How does FleetBold protect my data?",
    answer: "At FleetBold, data security is our top priority. We follow strict data protection protocols, ensuring that all fleet information is encrypted and stored securely. We never share your data with third parties without authorization."
  },
  {
    question: "Does FleetBold offer customer support?",
    answer: "For now, we offer support exclusively via email. If you need assistance, feel free to contact us at support@fleetbold.com."
  },
  {
    question: "How can I start using FleetBold?",
    answer: "FleetBold is currently in beta, and early access is available exclusively to users who sign up for our waiting list. By joining, you’ll get priority access to FleetBold before its official launch in mid-to-late March. Don’t miss out—sign up now to be among the first to experience the future of fleet management!"
  }
];

export default function Home() {
  
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <FAQ faqs={faqs} />
    </section>
  );
}
