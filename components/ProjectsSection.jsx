"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Meme Generator",
        description: "You can generate random meme! Built using React.",
        image: "/images/meme.png",
        tag: ["All", "Web"],
        link: "https://bespoke-capybara-5681fc.netlify.app/",
        git: "https://github.com/JanPetarda/Meme-Generator"
    },
    {
        id: 2,
        title: "Tenzies Game",
        description: "Amazing Tenzies game!",
        image: "/images/tenzies.jpg",
        tag: ["All", "Web"],
        link: "https://statuesque-sunflower-b506b9.netlify.app/",
        git: "https://github.com/JanPetarda/Tenzies"
    },
    {
        id: 3,
        title: "Password Generator",
        description: "Easy 15 digit password generator",
        image: "/images/pass.jpg",
        tag: ["All", "Web"],
        link: "https://classy-marshmallow-62ac5e.netlify.app/",
        git: "https://github.com/JanPetarda/Password-Generator"
    },
  
    // {
    //     id: 4,
    //     title: "Oldagram",
    //     description: "Project 4 Description",
    //     image: "/images/oldagram.png",
    //     tag: ["All", "Web"],
    //     link: "https://classy-marshmallow-62ac5e.netlify.app/"
    // },
   
    // {
    //     id: 5,
    //     title: "Dashboard",
    //     description: "Project 3 Description",
    //     image: "/images/dashboard.png",
    //     tag: ["All", "Web"],
    //     link: "https://classy-marshmallow-62ac5e.netlify.app/"
    // },
    // {
    //     id: 6,
    //     title: "Airbnb experiences clone",
    //     description: "Project 6 Description",
    //     image: "/images/experiences.png",
    //     tag: ["All", "Web"],
    //     link: "https://classy-marshmallow-62ac5e.netlify.app/"
    // },
]


const ProjectsSection = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        const cardVariants = {
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
          };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => 
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        link={project.link}
                        git={project.git}
                        
                        />
                 </motion.li>
                )}
                </ul>
        
        </section>
    )
}

export default ProjectsSection;