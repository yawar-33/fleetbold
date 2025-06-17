"use client";
// import { Marquee } from '@gfazioli/mantine-marquee';
// import { Avatar, Card, Group, Rating, Stack, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';
import '@gfazioli/mantine-marquee/styles.css';

 
import SectionHeader from "../Common/SectionHeader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
 
import { useState } from "react";
import { testimonials } from '@/constants/testimonial';

const TestimonialMarquee = () => {
  

  function BoxComponent({
    children,
    avatar,
    name,
    rating,
    ...props
  }: {
    children: ReactNode;
    avatar: string;
    name: string;
    [key: string]: any;
  }) {
    return (
      <div>

      </div>
      // <Card w={200} shadow="sm" padding="lg" radius="md" withBorder style={{marginBottom:10}}>
      //   <Card.Section p={'md'}>
      //     <Group>
      //       {/* <Avatar size="md" radius="xl" src={avatar} /> */}
      //       <Title order={4}>{name}</Title>
      //     </Group>
      //   </Card.Section>
      //   <Stack>
      //     <Text size="sm" c="dimmed">
      //       {children}
      //     </Text>
      //     <Group justify="end">
      //       <Rating value={rating} />
      //     </Group>
      //   </Stack>
      // </Card>
    );
  }

  return (
    <section id="marquee" className="flex overflow-hidden pb-20 lg:pb-25 xl:pb-30 justify-center flex-col gap-4">
    {/* <Marquee  fadeEdges duration={50}  >
      {testimonials.map(({ text, ...testimonial }, index) => (
        <BoxComponent key={index} {...testimonial}>
          {text}
        </BoxComponent>
      ))}
    </Marquee>
    <Marquee reverse fadeEdges duration={50}>
      {testimonials.map(({ text, ...testimonial }, index) => (
        <BoxComponent key={index} {...testimonial}>
          {text}
        </BoxComponent>
      ))}
    </Marquee> */}
    </section>
  );
}




const TestimonialV2 = ({testimonials, showProfilePic}:any) => {
  
  return (
    <>
      <section id="testimonials">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Trustpilot Agent Testimonials`,
                description: `Trusted by Top Producers nationwide.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="visible"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <TestimonialMarquee></TestimonialMarquee>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TestimonialV2;
