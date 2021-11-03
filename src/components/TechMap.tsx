import React, { useState } from 'react'

interface TechStack{
    techStack:string[],
    addFilter:any,
    deleteFilter:any,
    filterArray:string[]
}

export default function TechMap({techStack, addFilter, filterArray, deleteFilter}:TechStack) {
    
    function handleClick(tech:string){
        if(filterArray.includes(tech)){
            deleteFilter(tech)
        }else{
            addFilter(tech)
        }
    }


    return (
      
        <div className="tech-map row">
            {techStack.map((tech) => {
                return(
                    <>
                        <div onClick={()=>handleClick(tech)} className={filterArray.includes(tech) ? "tech-on" : "tech"}>{tech === "HTML_CSS_JS" ? "HTML CSS JS" : tech}</div>
                    </>
                )
            })}
            
        </div>
      
    )
}
