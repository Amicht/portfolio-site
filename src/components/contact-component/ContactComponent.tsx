import React from 'react'

interface Props{
  color?: string
}

const ContactComponent = ({color}: Props) => {

    const icons = [
        {
          href: "https://www.linkedin.com/in/amit-licht/",
          icon: "bi bi-linkedin"
        },
        {
          href: "https://github.com/Amicht",
          icon: "bi bi-github"
        },
        {
          href: "https://wa.me/972543209402",
          icon: "bi bi-whatsapp"
        },
      ]
      
  return (
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {icons.map((icn) => <li key={icn.href} className="ms-3" >
            <a 
            href={icn.href}
            target="_blank"
            rel="noreferrer">
                <i className={icn.icon} style={{color, width:"30", height:"24"}}></i>
            </a>
        </li>)}
    </ul>
  )
}

export default ContactComponent