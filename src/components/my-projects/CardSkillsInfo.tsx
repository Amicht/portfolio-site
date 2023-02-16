import React from 'react'

interface Props{
    skills:string[]
}

const CardSkillsInfo = ({skills}:Props) => {
  return (
    <div className='my-2 fs-6'>
        {skills.map((s,idx) => 
            <span 
                key={s+idx}
                className='btn mx-1 mb-1 btn-secondary disabled'>
                    {s}
            </span>)}
    </div>
  )
}

export default CardSkillsInfo