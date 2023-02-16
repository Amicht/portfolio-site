import React from 'react';
import { ProjectModel } from '../../models/ProjectModel';
import { projects } from '../../utils/projects';
import ProjectCard from '../ProjectCard';
import ProjectsFilterBar from './ProjectsFilterBar';

const MyProjects = () => {

    const txts = {
      title: "WORK",
      subtitle: "CHECK OUT MY PROJECTS"
    }

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
    <div>
        <div className='text-center my-4'>
          <h2 className='fs-1'>{txts.title}</h2>
          <h3 className='fs-3'>{txts.subtitle}</h3>
          <ProjectsFilterBar 
            key={"filter-bar"}
            skillWordChangeHndler={SkillWordChangeHndler}
            activeSkill={activeSkill}/>
        </div>

        <div className='row mt-5'>
          {myProjects.map((p,idx) => 
            <ProjectCard 
              key={p.name + idx} 
              {...p}/>)}
      </div>
    </div>
  )
}

export default MyProjects