import React from 'react'

interface ProjectsRowWrapper{
    title:string
    children:any
}

export default function ProjectsRowWrapper({title, children}:ProjectsRowWrapper) {
    return (

        <section>
            <h3>{title}</h3>
            <div className="row">
                {children}
            </div>
        </section>
    )
}
