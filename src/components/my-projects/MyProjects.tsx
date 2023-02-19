import React from 'react';
import { ProjectModel } from '../../models/ProjectModel';
import { projects } from '../../utils/projects';
import ProjectCard from './project-card/ProjectCard';
import ProjectsFilterBar from './project-filter-bar/ProjectsFilterBar';
import './my-projects-section.scss';
import { navBarSections } from '../../utils/sections';
import { ThemeCtxt } from '../../context/ThemeCtxt';

const MyProjects = () => {

    const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);
    const title = "CHECK OUT SOME OF MY PROJECTS";
    const allSkills = "All";

    const [myProjects, setMyProjects] = React.useState<ProjectModel[]>(projects);
    const [activeSkill, setActiveSkill] = React.useState<string>("All");

    const SkillWordChangeHndler = (skillWord:string) => {
        setActiveSkill(skillWord);

        if(skillWord === allSkills){
            setMyProjects(projects);
            return;
          }
        setMyProjects(projects.filter((p,idx) => 
          !!(p.tools.findIndex(skill => skillWord === skill) !== -1)))
        
    }

  return (
    <section 
      style={{backgroundColor, color}}
      id={navBarSections[1].id} 
      className='my-projects-sction py-5'>

      <div className='container'>
        <div data-aos="fade-up"
            data-aos-duration="1200">
            <div className='text-center my-4'>
              <h2 className='fs-1 py-5'>{title}</h2>
              <ProjectsFilterBar 
                key={"filter-bar"}
                skillWordChangeHndler={SkillWordChangeHndler}
                activeSkill={activeSkill}/>
            </div>

            <div className='row mt-5 text-secondary'>
              {myProjects.map((p,idx) => 
                <ProjectCard 
                key={p.name + idx} 
                {...p}/>)}
            </div>
        </div>
      </div>

      <div className="custom-shape-divider-top-1676596099">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{fill:color}}></path>
          </svg>
      </div>
    </section>
  )
}

export default MyProjects