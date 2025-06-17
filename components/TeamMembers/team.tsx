"use client";
import React from "react";
import Image from "next/image";

const TeamSection = ({ teamMembers }) => {
  // const shuffledTeamMembers = useMemo(() => {
  //   return [...teamMembers].sort(() => Math.random() - 0.5);
  // }, [teamMembers]);
  //teamMembers = teamMembers.sort(t => t.name);
  return (
    <section className="py-24 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-center font-bold text-xl md:text-4xl dark:text-white text-black">
            Meet the Brains
          </h2>
          <p className="text-lg text-gray-500 text-center">
            These people work on making our product the best.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
          {teamMembers.sort((a, b) => a.name.localeCompare(b.name)).map((member) => (
            <div key={member.id} className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-1/2">
              <div className="relative mb-5">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                {member.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500">
                {member.designation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
