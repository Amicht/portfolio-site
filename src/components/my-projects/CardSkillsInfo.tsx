import React from 'react'

interface Props{
    skills:string[]
}

const CardSkillsInfo = ({skills}:Props) => {
  return (
    <div className='my-2'>
        {skills.map((s,idx) => 
            <span 
                key={s+idx}
                className='btn mx-1 mb-1 btn-secondary disabled card-skill-info'>
                    {s}
            </span>)}
    </div>
  )
}

export default CardSkillsInfo