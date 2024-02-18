import React ,{useState,useEffect}from 'react';
import "./Nav.css"

function Nav() {
    const [show , handleShow]=useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
         className='nav__logo'
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158"
         alt="Netflix logo" 
        />   

        <img 
         className='nav__avatar'
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt="Netflix logo" 
        />     


    </div>
  )
}

export default Nav
