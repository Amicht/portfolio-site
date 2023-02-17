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
    <div className='row card-links-btns'>
        {urlLinks.map((url, idx) => 
            <span className='col'
                key={url.txt+idx}>
                <a 
                    className={`text-info hover-underline-animation`}
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