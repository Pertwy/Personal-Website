import './App.css';
import Certification from './components/Certification';
import Certifications from './components/sections/Certifications';
import PersonProjects from './components/sections/PersonProjects';
import Portfolio from './components/sections/Portfolio';

function App() {

  return (
    <div className="App">

      <nav className="space-between">
        <div className="row">
          <a target="_blank" href="https://github.com/Pertwy">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 1A10.89 10.89 0 0 0 1 11.77A10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11a2.37 2.37 0 0 0 3.2.89a2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91a3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77A10.89 10.89 0 0 0 12 1"/></svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/john-perkins001/">
            <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036c-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85c3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.433a2.063 2.063 0 1 1 0-4.13a2.065 2.065 0 0 1 0 4.13zM7.12 20.45H3.558V8.997H7.12V20.45zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
          </a>  
          </div> 
        <div className="row nav">
          <p>Portfolio</p>
          <p>Work Experience</p>
          <p>Personal Projects</p>
          <p>About</p>
          <p>Contact</p>
        </div>  
      </nav>

      <section className="grid-half">
        <div className="justify-left introduction">
          <h1>Hi, my name is John</h1>
          <p>I???m a Javascript web developer with a background in aerospace engineering.</p>
        </div>
        
        <div>
          <img className="profile-img" src="https://i.pinimg.com/originals/69/20/fc/6920fc266ea0a8bfbb02561dfdd18f1c.png"></img>
        </div>
      </section>
   
      <Certifications/>
      <Portfolio/>
      <PersonProjects/>

    </div>
  );
}

export default App;
