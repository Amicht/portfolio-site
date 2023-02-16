import React from 'react';
import { ProjectModel } from '../models/ProjectModel';
import CardLinksBtns from './my-projects/CardLinksBtns';
import CardSkillsInfo from './my-projects/CardSkillsInfo';
import CardTitlesSection from './my-projects/CardTitlesSection';
import './project-card.scss'


const ProjectCard = ({description, git_url,image,name,site_url,tools}:ProjectModel) => {
  
    const skills = [tools[0], tools[1], `+${tools.length - 2} more`];
    const urlLinks = [
        {link: git_url, txt: "code"},
        {link: site_url, txt: "site"}
    ]
    

    return (
    <div className='col-md-6 text-center mb-3'>
        <div className='px-0 project-card pb-3'>
            
            <img 
                className='mx-0' 
                src={'/images/' + image} 
                alt={image + ' image'} />
            
            <CardSkillsInfo 
                skills={skills} 
                key={"card-skills"} />

            <CardTitlesSection 
                name={name}
                description={description}
                key="CardTitlesSection"/>
            

            <CardLinksBtns 
                urlLinks={urlLinks} 
                key="card-link-btns"/>
        </div>
    </div>
  )
}

export default ProjectCard