import React from 'react';
import logo from './logo.svg';
import './App.css';
import {projects} from "./data"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section>Profile (View full profile) - Certifications, Work Experience - Blog</section>
      <section>Nav bar - Full stack, Web Dev, Apps, Other Projects</section>
      
      <section className="project">
        <p>image</p>
        <p>title</p>
        <p>tech</p>
        <p>description</p>
        <p>Link</p>
      </section>

    </div>
  );
}

export default App;
