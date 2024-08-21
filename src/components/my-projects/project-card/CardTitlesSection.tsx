
interface Props{
    name:string
    description:string
    he_desc: string
    isHebrew: boolean
}

const CardTitlesSection = ({description,name, he_desc, isHebrew }:Props) => {

  return (
    <div className='mx-1 mb-5'>
        <h3 className='mt-3'>{name}</h3>
        <p className={`${isHebrew ? 'text-end': 'text-start'} px-3`}>
            <span className='fs-5'>
                {isHebrew? he_desc : description}
            </span>
        </p>
    </div>
  )
}

export default CardTitlesSection