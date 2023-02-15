import React, { useEffect } from 'react'
import { projects } from '../../utils/projects';
import { techTools } from '../../utils/tools';
import SkillBtn from './SkillBtn';

interface Props{
    skillWordChangeHndler: (skill:string) => void;
}

interface SkillI{
    name:string,
    match: number
}
const ProjectsFilterBar = ({skillWordChangeHndler}:Props) => {

    const [skills, setSkills] = React.useState<SkillI[]>([]);

    const allOptions = "All";
    const getSkillsWithProjectCount = () => {
        const mappedSkills = Object.values(techTools).map((t,idx) => {
            return {
                name: t,
                match: projects.filter((p,idx) => !!(p.tools.findIndex(skill => t === skill) !== -1)).length
            }
        })
        setSkills(mappedSkills);
    }

    React.useEffect(() => { getSkillsWithProjectCount(); },[]);

  return (
    <div className='d-flex row mt-3'>
        <SkillBtn 
            key={allOptions}
            match={projects.length}
            skillName={allOptions}
            skillWordChangeHndler={skillWordChangeHndler}/>

        {skills.map((t,idx) => 
            <SkillBtn 
                key={t.name}
                skillName={t.name}
                match={t.match}
                skillWordChangeHndler={skillWordChangeHndler} />
            )}
    </div>
  )
}

export default ProjectsFilterBar