import React from 'react'

export default function ProjectSingle() {
    
    const props = {
        image: "https://www.savers.co.uk/medias/sys_master/root/h29/h58/8986872872990/STORE.jpg",
        title: "Saver",
        tech: ["React Naitive", "Redux", "Firebase"],
        description:"description",
        webLink:"",
        githubLink:""
    }
    
    return (
        <div>
            <h4>{props.title}</h4>
            {/* <img src={props.image} alt={props.title}></img> */}
            <p>{props.description}</p>
            <p>Tech Stack</p>
            <p><a href={props.webLink}>WebLink</a></p>
            <p><a href={props.githubLink}>GitHubLink</a></p>
        </div>
    )
}
