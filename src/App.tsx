import './App.css';
import {projects} from "./data"
import ProjectMap from './components/ProjectMap';
import ProjectsRowWrapper from './components/ProjectsRowWrapper';
import TechMap from './components/TechMap';
import TechUsedMap from './components/TechUsedMap';

function App() {

  let test = ["React", "Typescript"]

  return (
    <div className="App">

      <nav className="space-between">
        <div className="row">
          <p>Github</p>
          <p>Linkedin</p>
        </div> 
        <div className="row">
          <p>About</p>
          <p>Portfolio</p> 
          <p>Contact</p>
          <p>Wrok experience</p>
          <p> personal projects</p>
        </div>  
      </nav>

      <section className="grid-half">
        <div className="justify-left introduction">
          <h1>Hi, my name is John</h1>
          <p>I’m a freelance UX/UI Designer with a marketing background specializing in Shopify & Webflow.</p>
        </div>
        
        <div>
          <img className="profile-img" src="https://media.istockphoto.com/vectors/working-at-home-vector-flat-style-illustration-online-career-space-vector-id1241710727?b=1&k=20&m=1241710727&s=170667a&w=0&h=TH-n9JrD1BFzemwari9VgBtx6dVmNnm3KrYhLEtx0B4="></img>
        </div>
        
        
      </section>


      <TechMap />
      
      <section>
        
        <ProjectMap/>
        
      </section>

    </div>
  );
}

export default App;
