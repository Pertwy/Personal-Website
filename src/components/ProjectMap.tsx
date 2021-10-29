import ProjectSingle from './ProjectSingle'
import {projects} from "../data"
import { useEffect, useState } from 'react'

interface Props{
    filterArray: string[]
}
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

export default function ProjectMap({filterArray}:Props) {
     
    const [projectsLocal, setProjectsLocal] = useState<any>([])

    useEffect(() => {
        if(filterArray.length > 0){

            let filteredProjectArray:any[]= []

            projects.forEach((project) =>{
                if(project.tech.some(r=> filterArray.indexOf(r) >= 0)){
                    filteredProjectArray.push(project)
                }
            })
            setProjectsLocal(filteredProjectArray)

            
        }else{
            setProjectsLocal(projects)
        }
    }, [filterArray])


    return (
        <>
        {projectsLocal.map((project:any) => {
            return(
                <div>
                    <p><ProjectSingle project={project}/></p>
                </div>
            )
        })}
        </>
    )
}
