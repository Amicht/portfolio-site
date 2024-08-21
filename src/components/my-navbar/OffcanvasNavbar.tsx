import {  useContext } from 'react';
import { ThemeCtxt } from '../../context/ThemeCtxt';
import ContactComponent from '../contact-component/ContactComponent';
import './costum-switch.scss';
import './offcanvas-navbar.scss';
import { LanguageCtxt } from '../../context/LanguageCtxt';


interface Props{
  changeThemeHandler: () => void
}


const OffCanvasNavbar = ({changeThemeHandler }:Props) => {
    
  const langCtxt = useContext(LanguageCtxt);
  const languages = {
    en: "English",
    he: "עברית"
  }
  const langToChange = langCtxt.lang.lang === 'en'? languages.he: languages.en;

  const {dark: {backgroundColor,color}} = useContext(ThemeCtxt);

  return (
    <section dir={'ltr'} style={{backgroundColor, color}} className="py-1 sticky-top">
      <div className='container d-flex justify-content-end'>
        <div  className='d-flex container my-auto fs-3 ms-0 ps-0' >
            <ContactComponent color={color} />
        </div>
        <button style={{backgroundColor: color, color: backgroundColor }} className='btn btn-outline rounded px-2 mx-2' onClick={() => langCtxt.changeLang(langToChange)}>{langToChange}</button>
        <label className="costum-switch my-2 px-4" >
          <input type="checkbox" onClick={changeThemeHandler} />
          <span style={{backgroundColor:color}} className="slider round"></span>
        </label>
      </div>
    </section>
  );
}


export default OffCanvasNavbar;