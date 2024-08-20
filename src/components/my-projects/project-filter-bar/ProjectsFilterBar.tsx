import React from 'react'
import { projects } from '../../../utils/projects';
import { techTools } from '../../../utils/techTools';
import SkillBtn from './SkillBtn';
import { LanguageCtxt } from '../../../context/LanguageCtxt';

interface Props{
    skillWordChangeHndler: (skill:string) => void;
    activeSkill:string
}

interface SkillI{
    name:string,
    match: number,
}
const ProjectsFilterBar = ({skillWordChangeHndler,activeSkill}:Props) => {

    const {lang: { sections: {projects: {allSkills}}}} = React.useContext(LanguageCtxt);
    const [skills, setSkills] = React.useState<SkillI[]>([]);
    const initSkills = [
        techTools.react, techTools.angular, techTools.next, 
        techTools.mysql, techTools.mongodb, techTools.ts, techTools.vanila_js, 
    ]

    const allOptions = allSkills;
    const getSkillsWithProjectCount = () => {
        const mappedSkills = initSkills.map((t,idx) => {
            return {
                name: t,
                match: projects.filter((p,idx) => !!(p.tools.findIndex(skill => t === skill) !== -1)).length
            }
        });
        mappedSkills.unshift({name: allOptions, match: projects.length});
        setSkills(mappedSkills);
    }

    React.useEffect(() => { getSkillsWithProjectCount(); },[allSkills]);

  return (
    <div className='row mt-3'>

        {skills.map((t,idx) => 
            <SkillBtn 
                key={t.name + idx}
                skillName={t.name}
                isActive={t.name === activeSkill}
                match={t.match}
                skillWordChangeHndler={skillWordChangeHndler} />
            )}
    </div>
  )
}

export default ProjectsFilterBar