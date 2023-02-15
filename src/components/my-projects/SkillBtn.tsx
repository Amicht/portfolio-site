import React from 'react'
interface Props{
    skillWordChangeHndler: (skill:string) => void;
    skillName: string;
    match:number
}

const SkillBtn = ({skillName,skillWordChangeHndler,match}: Props) => {
    
  return (
    <div 
        className='mx-2 mt-2 col-2 px-1 text-light skill-btn'
        onClick={() => skillWordChangeHndler(skillName)} >
            {`${skillName} (${match})`}
    </div>
  )
}

export default SkillBtn