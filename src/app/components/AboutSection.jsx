"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import VideoPlayer from './VideoPlayer'


import TabButton from "./TabButton";

const TAB_DATA = [
 
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Constantine 2, Master Degree in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Getting Started with DevOps</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-48" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <VideoPlayer  className="w-[500px] h-[500px]" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a web  developer and software engineer with a master's degree in computer science. 
          I have a strong passion for building innovative and user-friendly web applications.
           I am also skilled in a variety of programming languages and technologies, 
           including Python(Django), JavaScript, React,Next js, and SQL. 
           I am a highly motivated and results-oriented individual with a proven track record of success. 
           I am also a team player and I am always eager to learn new things. 
           I am confident that my skills and experience would be a valuable asset to any company.
          </p>
          <div className="flex flex-row justify-start mt-8">
        

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
