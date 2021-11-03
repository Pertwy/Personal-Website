import React from 'react'

interface Props{
    title:string,
    link:string,
    image:string
}

export default function Certification({title, link, image}:Props) {
    return (
        <a className="certification-link" target="_blank" href={link}>
            <div className="center">
                <img className="certification" src={image}></img>
                <p>{title}</p>
            </div>  
        </a>
    )
}
