import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './utils/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_colors.scss';
import MyProjects from './components/my-projects/MyProjects';

function App() {


  return (
    <div className="App container">
      <MyProjects />
    </div>
  );
}

export default App;
