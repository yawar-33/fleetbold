"use client";
import axios from 'axios';
import { Minus, Plus } from 'lucide-react';
import React, { useState ,useEffect } from 'react';
const faqsData = [
  {
    question: "What is FleetBold and how does it work?",
    answer:
      "FleetBold is an advanced fleet management platform designed to help businesses track vehicles in real time, optimize operations, and enhance security. Our platform connects with GPS tracking devices, including Moovetrax, Bouncie, and Tesla, to provide live vehicle location, performance insights, and operational analytics in one seamless interface.",
  },
  {
    question: "What GPS tracking devices are compatible with FleetBold?",
    answer:
      "FleetBold supports a wide range of GPS devices, including Moovetrax, Bouncie and more. Additionally, our Tesla API integration allows for advanced real-time tracking and data analysis.",
  },
  {
    question: "Does FleetBold offer customer support?",
    answer:
      "For now, we offer support exclusively via email. If you need assistance, feel free to contact us at support@fleetbold.com.",
  },
  {
    question: "Is my data secure with FleetBold?",
    answer:
      "At FleetBold, data security is our top priority. We follow strict data protection protocols, ensuring that all fleet information is encrypted and stored securely. We never share your data with third parties without authorization.",
  },
  {
    question: "How do I get started with FleetBold?",
    answer:
      "FleetBold is currently in beta. You can sign up for early access on our website and be among the first to experience the future of fleet management.",
  },
];
const FAQ = () => {


  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
const url = process.env.NEXT_PUBLIC_APP_URL
    const [faqData, setFaqData] = useState({
      faqs:[...faqsData],
      headerTitle: 'Frequently Asked Questions (FAQs)',
      headerDescription: 'Find the information you need about our services, plans, and processes. If you have more questions, feel free to reach out to us!'
    });
    useEffect(() => {
      getData()
    }, []);
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    };
       const getData = async () => {
      axios
        .get(`${url}/faqHeader/faq-section`, options)
        .then((res) => {
          setFaqData(res.data.data)
        }).catch((error) => {

          // toast({
          //   title: "error:",
          //   description:
          //     error.message
          // });
        })
      }
  const toggleFAQ = (index: number) => {
    const newSet = new Set(openIndexes);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenIndexes(newSet);
  };
  return (
    <div className="text-white w-full" id="faq-section">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center mb-6">
          <h1 className="flex-1 font-outfit text-[45px] font-medium leading-[1.2] text-center">
           {faqData.headerTitle}
          </h1>
        </div>

        <p className="font-outfit text-[18px] font-normal leading-[1.5] text-center text-white/80 max-w-xl mx-auto mb-10">
         {faqData.headerDescription}
        </p>

        <div className="bg-[#0C0C0F] rounded-xl p-6 space-y-6  text-xs leading-relaxed">
          {faqData.faqs.map((item, index) => {
            const isOpen = openIndexes.has(index);
            return (
              <div key={item.question}>
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-start text-white text-[16px] font-outfit font-normal leading-[1.5]"
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus /> : <Plus />}
                </button>
                {isOpen && (
                  <p className="mt-3 text-white/70 text-[16px] font-outfit font-normal leading-[1.5]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

