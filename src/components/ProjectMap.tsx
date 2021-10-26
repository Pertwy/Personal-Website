import React from 'react'
import ProjectSingle from './ProjectSingle'

export default function ProjectMap() {
    
    const props:string[] = ["project1", "P2", "P3"]
    
    return (
        <>
        {props.map((project:any) => {
            return(
                <div>
                    <p><ProjectSingle/></p>
                </div>
            )
        })}
        </>
    )
}
