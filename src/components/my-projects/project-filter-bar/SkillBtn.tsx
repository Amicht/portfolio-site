import './skill-btn.scss'


interface Props{
    skillWordChangeHndler: (skill:string) => void;
    skillName: string;
    match:number
    isActive:boolean
}

const SkillBtn = ({skillName,skillWordChangeHndler,match, isActive}: Props) => {
    
  return (
    <div 
        className={`px-1 col-1 mx-2 px-1 btn skill-btn 
          ${isActive? 'btn-secondary':'btn-primary'}`}
        onClick={() => skillWordChangeHndler(skillName)} >
            {`${skillName} (${match})`}
    </div>
  )
}

export default SkillBtn