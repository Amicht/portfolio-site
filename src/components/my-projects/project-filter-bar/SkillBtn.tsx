import React from 'react';
import { ThemeCtxt } from '../../../context/ThemeCtxt';
import './skill-btn.scss'


interface Props{
    skillWordChangeHndler: (skill:string) => void;
    skillName: string;
    match:number
    isActive:boolean
}

const SkillBtn = ({skillName,skillWordChangeHndler,match, isActive}: Props) => {

  const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);

  return (
    <div 
        className={`px-1 col-1 mx-2 my-1 px-1 btn skill-btn 
          ${isActive? 'btn-info text-primary':'btn-dark'}`}
        onClick={() => skillWordChangeHndler(skillName)} >
            {`${skillName} (${match})`}
    </div>
  )
}

export default SkillBtn