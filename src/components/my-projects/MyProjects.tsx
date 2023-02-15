import React from 'react';
import { ProjectModel } from '../../models/ProjectModel';
import { projects } from '../../utils/projects';
import { techTools } from '../../utils/tools';
import ProjectCard from '../ProjectCard';
import ProjectsFilterBar from './ProjectsFilterBar';

const MyProjects = () => {

    const [myProjects, setMyProjects] = React.useState<ProjectModel[]>(projects);

    const SkillWordChangeHndler = (skillWord:string) => {
        if(skillWord === "All"){
            setMyProjects(projects)
        }
        else{
            setMyProjects(projects.filter((p,idx) => !!(p.tools.findIndex(skill => skillWord === skill) !== -1)))
        }
        
    }

    


  return (
    <div>
        <ProjectsFilterBar skillWordChangeHndler={SkillWordChangeHndler}/>
        <div className='row mt-5'>
        {myProjects.map((p,idx) => <ProjectCard key={p.name} {...p}/>)}
      </div>
    </div>
  )
}

export default MyProjects