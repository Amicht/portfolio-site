import React from 'react';
import { ProjectModel } from '../models/ProjectModel';
import './project-card.scss'


const ProjectCard = ({description, git_url,image,name,site_url,tools}:ProjectModel) => {
  
    
    return (
    <div className='col-md-6 text-center project-card'>
        <img className='mx-1' src={'/images/' + image} alt={image + ' image'}/>
        <h2 className='my-3'>{name}</h2>
        <p>
            <span className='fs-5'>{description}</span>
            <br/><br/>
            <span className='mt-2 fs-6'>
                <span className='text-info fw-bold'>tools: </span>
                {tools.join((', '))}
            </span>
        </p>
        <div className='mt-3 mb-2 mx-3 d-flex alugn-items'>
            <a className="me-auto p-2" href={git_url}>code </a>
            <a className='p-2' href={site_url}>site </a>
        </div>
    </div>
  )
}

export default ProjectCard