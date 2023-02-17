import React from 'react';
import { ProjectModel } from '../../../models/ProjectModel';
import CardLinksBtns from './CardLinksBtns';
import CardSkillsInfo from './CardSkillsInfo';
import CardTitlesSection from './CardTitlesSection';
import './project-card.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';


const ProjectCard = ({description, git_url,image,name,site_url,tools}:ProjectModel) => {
  
    const skills = [tools[0], tools[1], `+${tools.length - 2} more`];
    const urlLinks = [
        {link: git_url, txt: "code"},
        {link: site_url, txt: "site"}
    ]

    
    

    return (
    <div data-aos="fade-up" 
        data-aos-duration="1200"
        className='col-lg-4 col-sm-6 text-center mb-3'>
        <div className='px-0 project-card pb-5 mb-5'>
            
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