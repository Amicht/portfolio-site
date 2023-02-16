import React from 'react'

interface Props{
    urlLinks: UrlLinkI[]
}

interface UrlLinkI{
    link: string
    txt:string
}

const CardLinksBtns = ({urlLinks}:Props) => {
  return (
    <div className='row mx-auto pb-2 px-auto'>
    {urlLinks.map((url, idx) => 
        <span className='col'>
            <a 
                key={url.txt+idx}
                className={`me-auto fs-2 text-info hover-underline-animation`}
                href={url.link} 
                target="_blank"
                rel="noreferrer">
                    {url.txt} 
            </a>
        </span>)}
    </div>
  )
}

export default CardLinksBtns