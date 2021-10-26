import React from 'react';
import logo from './logo.svg';
import './App.css';
import {projects} from "./data"
import ProjectMap from './components/ProjectMap';
import ProjectsRowWrapper from './components/ProjectsRowWrapper';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section>Profile (View full profile) - Certifications, Work Experience - Blog</section>
      <section>Nav bar - Full stack, Web Dev, Apps, Other Projects</section>
      
      <section>
        <ProjectsRowWrapper title="FullStack">
          <ProjectMap/>
        </ProjectsRowWrapper>

        <ProjectsRowWrapper title="Front End">
          <ProjectMap/>
        </ProjectsRowWrapper>

        <ProjectsRowWrapper title="Apps">
          <ProjectMap/>
        </ProjectsRowWrapper>
      </section>

    </div>
  );
}

export default App;
