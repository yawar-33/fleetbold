"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import itemSvg1 from "../../assets/svg/award-badge.svg";
import itemSvg2 from "../../assets/svg/business-award.svg";
import itemSvg3 from "../../assets/svg/business-startup.svg";
import itemSvg4 from "../../assets/svg/business-trophy.svg";
import itemSvg5 from "../../assets/svg/businessman-with-success-trophy.svg";
import itemSvg6 from "../../assets/svg/colleagues-rejoice-at-the-new-award.svg";
import itemSvg7 from "../../assets/svg/girl-sending-mail-using-laptop.svg";
import itemSvg8 from "../../assets/svg/successful-businessman.svg";
import itemSvg9 from "../../assets/svg/winner-with-trophy.svg";
 

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        {/* <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={350}
            height={384}
            src={itemSvg1}
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0 "
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

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
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <Box sx={{marginTop:{xs:10, sm: 'auto'}}}>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by Top Agents
            </h2>
            <p className="mx-auto lg:w-11/12">
            Proudly helping real estate agents achieve their goals and scale their business.
            </p>
            </Box>
           
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                3K
              </h3>
              <p className="text-lg lg:text-para2">Top Agents</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                360K+
              </h3>
              <p className="text-lg lg:text-para2">Leads Generated</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                108K+
              </h3>
              <p className="text-lg lg:text-para2">Appointments Achieved</p>
            </motion.div>
          </div>
        </div> */}
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
