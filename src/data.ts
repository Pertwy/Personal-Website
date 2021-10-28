interface Project{
    image: string,
    title: string,
    tech: string[],
    description:string,
    webLink:string,
    githubLink:string
}

export const projects:Project[] = [
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Saver",
        tech: ["React", "Firebase", "ReactNative", "Typescript", "HTML_CSS_JS", "MongoDB", "Express", "RestfulAPIs", "Node"],
        description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
        webLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
        githubLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/"
    },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Bookshelf",
        tech: ["React",  "MongoDB", "Express", "RestfulAPIs", "Node"],
        description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
        webLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
        githubLink:"https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/"
    }
]