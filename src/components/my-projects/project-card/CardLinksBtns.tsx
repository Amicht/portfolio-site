import React from 'react'

interface Props{
    urlLinks: UrlLinkI[]
    isHebrew: boolean
}

interface UrlLinkI{
    link: string
    txt:string
    he_txt: string
}

const CardLinksBtns = ({urlLinks, isHebrew}:Props) => {
  return (
    <div className='row card-links-btns'>
        {
            urlLinks.map((url, idx) => {
                if(!url.link) return null;

                const {he_txt, txt} = url;

                return (
                <span className='col' key={url.txt+idx}>
                    <a 
                        className={`text-info hover-underline-animation`}
                        href={url.link} 
                        target="_blank"
                        rel="noreferrer">
                            {isHebrew ? he_txt: txt} 
                    </a>
                </span>)
            })
        }
    </div>
  )
}

export default CardLinksBtns