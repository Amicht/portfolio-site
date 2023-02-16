import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_colors.scss';
import MyProjects from './components/my-projects/MyProjects';
import MyFooter from './components/my-footer/MyFooter';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {

  React.useEffect(() => { AOS.init()},[]);

  return (
    <div className="container">
      <MyProjects key={"projects"}/>
      <MyFooter />
    </div>
  );
}

export default App;
