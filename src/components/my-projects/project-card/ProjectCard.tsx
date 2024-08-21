import { useContext } from 'react';
import { ProjectModel } from '../../../models/ProjectModel';
import CardLinksBtns from './CardLinksBtns';
import CardSkillsInfo from './CardSkillsInfo';
import CardTitlesSection from './CardTitlesSection';
import './project-card.scss';
import 'aos/dist/aos.css';
import { LanguageCtxt } from '../../../context/LanguageCtxt';
import { ThemeCtxt } from '../../../context/ThemeCtxt';


const ProjectCard = ({description, git_url,image,name,site_url,tools, he_desc}:ProjectModel) => {
  
    const langCtxt = useContext(LanguageCtxt);
    const themeCtxt = useContext(ThemeCtxt);
    const isBgDark = themeCtxt.dark.isBgDark;
    const isHebrew = (langCtxt.lang.lang === 'he');
    const skills = [tools[0], tools[1], `+${tools.length - 2} more`];
    const urlLinks = [
        {link: git_url || '', txt: "code", he_txt: "קוד"},
        {link: site_url || '', txt: "site", he_txt: "אתר"}
    ]

    return (
    <article data-aos="fade-up" 
        data-aos-duration="1200"
        className='col-lg-4 col-sm-6 text-center text-primary mb-3'>
        <div className={`px-0 project-card pb-5 mb-5 ${isBgDark? 'border border-light': ''}`}>
            
            <img 
                className='mx-0 shadow-lg'
                loading='lazy'
                src={'/images/' + image} 
                alt={image + ' image'} />
            
            <CardSkillsInfo 
                skills={skills} 
                key={"card-skills"} />

            <CardTitlesSection 
                name={name}
                isHebrew={isHebrew}
                description={description}
                he_desc={he_desc}
                key="CardTitlesSection"/>
            

            <CardLinksBtns 
                isHebrew={isHebrew}
                urlLinks={urlLinks} 
                key="card-link-btns"/>
            
        </div>
        
    </article>
  )
}

export default ProjectCard