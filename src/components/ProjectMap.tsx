import ProjectSingle from './ProjectSingle'
import {projects} from "../data"

export default function ProjectMap() {
     
    return (
        <>
        {projects.map((project:any) => {
            return(
                <div>
                    <p><ProjectSingle project={project}/></p>
                </div>
            )
        })}
        </>
    )
}
