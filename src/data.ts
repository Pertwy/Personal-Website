interface Projects{
    fullStack:Project,
    frontEnd:Project,
    apps:Project
}
interface Project{
    image: string,
    title: string,
    tech: string[],
    description:string,
    link:string,
    githubLink:string
}

export const projects:Projects = {
    fullStack:{
        image: "image",
        title: "Bookshelf",
        tech: ["React", "CSS", "MongoDB", "Express", "node.js"],
        description:"description",
        link:"www.thebookshelfapp.herokuapp.com",
        githubLink:""
    },
    frontEnd:{
        image: "image",
        title: "Personal Website",
        tech: ["Typescript", "React", "SaSS"],
        description:"Website for myself",
        link:"link",
        githubLink:""
    },
    apps:{
        image: "Saver",
        title: "Saver",
        tech: ["React Naitive", "Redux", "Firebase"],
        description:"",
        link:"",
        githubLink:""
    }
}