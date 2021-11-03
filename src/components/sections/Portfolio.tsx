
import { useState } from 'react'
import ProjectMap from '../ProjectMap'
import TechMap from '../TechMap'

export default function Portfolio() {

    const [techStack, setTechStack] = useState<string[]>([
        "React",
        "ReactNative",
        "Typescript",
        "HTML_CSS_JS",
        "MongoDB",
        "Express",
        "Firebase",
        "RestfulAPIs",
        "Heroku"
    ])
    //tech: ["React", "Firebase", "ReactNative", "Typescript", "HTML_CSS_JS", "MongoDB", "Express", "RestfulAPIs", "Node"],
    const [filterArray, setFilterArray] = useState<string[]>([])

    function addFilter(tech:string){
        setFilterArray(filterArray => [...filterArray, tech])
    }
    function deleteFilter(tech:string){
        setFilterArray(filterArray.filter(item => item != tech))
    }

    return (
        <section>
            <h1>Portfolio</h1>
            <p>Click to select or deselect technologies</p>
            <TechMap techStack={techStack} addFilter={addFilter} deleteFilter={deleteFilter} filterArray={filterArray}/>
            <div className="grid-half">
                <ProjectMap filterArray={filterArray}/>
            </div>
        </section>
    )
}
