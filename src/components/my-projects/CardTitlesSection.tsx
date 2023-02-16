import React from 'react'

interface Props{
    name:string
    description:string
}

const CardTitlesSection = ({description,name}:Props) => {
  return (
    <>
        <h2 className='mt-3'>{name}</h2>
        <p>
            <span className='fs-5'>
                {description}
            </span>
        </p>
    </>
  )
}

export default CardTitlesSection