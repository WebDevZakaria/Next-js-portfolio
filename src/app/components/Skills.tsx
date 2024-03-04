import {
    Backend_skill,
    Frontend_skill,
  } from "../../constants/index";
  import React from "react";
  import SkillDataProvider from "./SkillDataProvider";
  import SkillText from "./SkillText";
  import Image from "next/image";

  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9" }}
      >

        <SkillText />
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <div>
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <p className="text-center text-base text-purple-600 py-4">{image.skill_name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <div>
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <p className="text-center text-base text-purple-600 py-4">{image.skill_name}</p>
            </div>
          ))}
        </div>

   
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">

       <Image src="/dev4.gif" width={1300} height={400} alt="" className="h-[700px] rounded-3xl lg:rounded-full" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;