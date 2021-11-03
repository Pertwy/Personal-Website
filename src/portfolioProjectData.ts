interface Project{
    image: string,
    title: string,
    tech: string[],
    description:string,
    webLink?:string,
    githubLink:string,
}

//tech: ["React", "Firebase", "ReactNative", "Typescript", "HTML_CSS_JS", "MongoDB", "Express", "RestfulAPIs", "Node"],

export const projects:Project[] = [
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Saver",
        tech: ["Firebase", "ReactNative", "Redux"],
        description:"App created with React Native and Expo, then deployed to the Android App Store. The app is designed to help users save money by abstaining from an activity. For example, every time you decide not to have your morning coffee, you click a button on the Saver app, and the money you would have spent is transferred to your savings, or to charity",
        webLink:"https://pertwy.github.io/saver-landing-page/",
        githubLink:"https://github.com/Pertwy/Saver"
    },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Bookshelf",
        tech: ["React",  "MongoDB", "Express", "RestfulAPIs", "Node","Heroku"],
        description:"This website was not designed to look pretty, but as a project where I could  learn backend development. The website uses the Google Books API, and allows you to log books that you’ve read, write book reviews, create lists, follow your friends and see what books they have in their personal libraries that you can borrow!",
        webLink:"https://thebookshelfapp.herokuapp.com/",
        githubLink:"https://github.com/Pertwy/bookshelf"
    },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Portfolio Site",
        tech: ["Typescript",  "React"],
        description:"This very website was built from scratch, and has served to increase my TS proficiency, as well as showcase the projects that I have created in my spare time",
        webLink:"https://thebookshelfapp.herokuapp.com/",
        githubLink:"https://github.com/Pertwy/Personal-Website"
    },
    // {
    //     image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
    //     title: "Eco Job Board",
    //     tech: ["React",  "MongoDB", "Express", "RestfulAPIs", "Node", "Heroku"],
    //     description:"This site is a job board designed for people who want to find jobs at companies who have certified eco-friendly credentials. The idea is only hypothetical, but this demo shows how it would work",
    //     webLink:"https://thebookshelfapp.herokuapp.com/",
    //     githubLink:"https://github.com/Pertwy/bookshelf"
    // },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Turn design into webpage AVEMA",
        tech: ["React", "RestfulAPIs"],
        description:"This is a React site, created using RESTful APIs to demonstrate that I could take a UI design and recreate it ",
        // webLink:"https://thebookshelfapp.herokuapp.com/",
        githubLink:"https://github.com/Pertwy/AVAMAETest"
    },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Example Tech Site",
        tech: ["HTML_CSS_JS"],
        description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
        // webLink:"https://thebookshelfapp.herokuapp.com/",
        githubLink:"https://github.com/Pertwy/AVAMAETest"
    },
    {
        image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
        title: "Gatsby Site",
        tech: ["React", "Gatsby"],
        description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
        webLink:"https://laughing-aryabhata-d73529.netlify.app/",
        githubLink:"https://github.com/Pertwy/First-Gatsby"
    },
    // {
    //     image: "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg",
    //     title: "Next.js site",
    //     tech: ["Next", "React"],
    //     description:"This was a fully custom website that I designed from scrath in Figma, and then built in webflow. The aim was to have a friendly, yet professional vibe. The site is very fast - with a Google PAgespeed score of 99 for desktop and 92 for mobile",
    //     webLink:"https://thebookshelfapp.herokuapp.com/",
    //     githubLink:"https://github.com/Pertwy/AVAMAETest"
    // }
]
