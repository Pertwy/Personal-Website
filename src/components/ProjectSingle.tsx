import React from 'react'
import TechUsedMap from './TechUsedMap'

// React,
// ReactNative,
// Typescript,
// HTML_CSS_JS,
// MongoDB,
// Express,
// Firebase,
// RestfulAPIs,
// Node

interface Project{
    project:{
        image: string,
        title: string,
        tech: string[],
        description:string,
        webLink:string,
        githubLink:string
    }
}


export default function ProjectSingle({project}:Project) {
    
    const props = {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Saver",
        tech: ["React", "Firebase", "ReactNative", "Typescript", "HTML_CSS_JS", "MongoDB", "Express", "RestfulAPIs", "Node"],
        description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
        webLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
        githubLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/"
    }
    
    return (
        <div className="project grid-half ">
            <div className="justify-left">
                <h4 className="project-headline">{project.title}</h4>
                <TechUsedMap techUsed={project.tech}/>
                <p className="project-description">{project.description}</p>
                <p><a href={project.webLink}>WebLink</a></p>
                <p><a href={project.githubLink}>GitHubLink</a></p>
            </div>

            <div>
                <img className="project-image" src={project.image} alt={project.title}></img>
            </div>
        </div>
    )
}
