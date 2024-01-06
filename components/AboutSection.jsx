// "use client";
// import React from "react";
// import Image from "next/image";
// import { useTransition, useState } from "react";
// import TabButton from "./TabButton"

// const TAB_DATA = [
//     {
//         title: "Skills",
//         id:"skills",
//         content : (
//             <ul>
//                 <li>Node.js</li>
//                 <li>Express</li>
//                 <li>PostgreSQL</li>
//                 <li>Sequelize</li>
//                 <li>Javascript</li>
//                 <li>React</li>
//             </ul>
//         )
//     },
//     {
//         title: "Education",
//         id:"education",
//         content : (
//             <ul>
//                 <li>Scrimba Full Web Development Course</li>
//                 <li>JavaScript Course</li>
//             </ul>
//         )
//     },
//     {
//         title: "experience",
//         id:"experience",
//         content : (
//             <ul>
//                 <li>Javba</li>
//                 <li>JavaScript Course</li>
//             </ul>
//         )
//     }
// ]

// const AboutSection = () => {
//     const [tab, setTab] = useState("skills");
//     const [isPending, startTransition ] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(()=>{
//             setTab(id);
//         });
//     }

//     return (
//         <section className="text-white" id="about">
//         <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//           <Image src="/images/code.jpg" width={500} height={500} />
//             <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//                     <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//                     <p className="text-base lg:text-lg">
//                     I am a full stack web developer with a passion for creating
//                     interactive and responsive web applications. I have experience
//                     working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
//                     Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
//                     looking to expand my knowledge and skill set. I am a team player and
//                     I am excited to work with others to create amazing applications.
//                     </p>
//                     <div className="flex flex-row justify-start mt-8">
//                         <TabButton 
//                         selectTab={()=> handleTabChange("skills")} 
//                         active={tab === "skills"}> {" "} Skills {" "}
//                         </TabButton>

//                         <TabButton 
//                         selectTab={()=> handleTabChange("education")} 
//                         active={tab === "education"}> {" "} Education {" "}
//                         </TabButton>

//                         <TabButton 
//                         selectTab={()=> handleTabChange("experience")} 
//                         active={tab === "experience"}> {" "} Experience  {" "}
//                         </TabButton>
                        
//                     </div>
//                     <div className="mt-8">{TAB_DATA.find((t)=> t.id===tab).content}</div>

//             </div>
//           </div>
//         </section>
//     )
// }
// export default AboutSection;


"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML + CSS</li>
        <li>TailwindCSS</li>
        <li>Responsive Web Design</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>The Frontend Developer Career Path - Scrimba </li>
        <li>FreeCode Camp</li>
        <li>CS50x</li>
        <li>UDEMY</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Frontend Developer Career Path - Scrimba</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div
       
      className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={700}  className=" rounded hover:scale-105 ease-in-out duration-300" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a <span className="text-purple-500">Front End</span> web developer with a passion for creating
            interactive and responsive web applications with AI technology. I have experience
            working with JavaScript, React, Redux, HTML, CSS, and Git. 
            I&apos;m still on the beggining of my journey, but I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
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