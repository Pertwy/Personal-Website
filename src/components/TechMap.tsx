import React, { useState } from 'react'

export default function TechMap() {
    
    const [techStack, setTechStack] = useState<string[]>([
        "React",
        "React Native",
        "Typescript",
        "HTML CSS JS",
        "MongoDB",
        "Express",
        "Firebase",
        "Restful APIs"
    ])
    
    return (
      
        <div className="row">
            {techStack.map((tech) => {
                return(
                    <>
                    <div className="tech">{tech}</div>
                    </>
                )
            })}
            
        </div>
      
    )
}
