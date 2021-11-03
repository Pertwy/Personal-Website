import React, { useState } from 'react'
import drone from "../../images/Drone.jpg"

export default function PersonProjects() {
    
    const [isExpand, setIsExpand] = useState<boolean>(false)
    
    return(
        <>
        <div className="row space-between">
            <h1>Masters project</h1>
            <p className="expand-button" onClick={()=>setIsExpand(!isExpand)}>Expand</p>
        </div>

        <div className="grid-half">
            <div>
                <p>Tail sitting drone</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quas eum qui doloremque aliquam enim provident, fugit tempore nam in velit nihil aliquid quis fuga, asperiores aut! Dicta, commodi in!</p>
            </div>

            <div>
                <img className="project-image" src={drone} alt={"drone"}></img>
            </div>

            {isExpand &&
                <>
                    <div className="iframe-container">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/5F0VfV9CqoM" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div>
                        Further information 
                    </div>
                </>
            }

        </div>
        </>
    )
}
