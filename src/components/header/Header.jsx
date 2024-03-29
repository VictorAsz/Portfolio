import React, { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import "./header.css";



const Header = () => {
   

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })


    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home")

    const toggleMenu = () => {
        showMenu(!Toggle);
    }

    return (

        
        <header className="header">
            
            <nav className="nav container">


                <a href="index.html" className="nav_logo">Victor</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" 
                            onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-estate nav_icon"></i>
                                Home 
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about"
                            onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}
                            > 
                                <i className="uil uil-user nav_icon"></i> 
                                Sobre
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" 
                            onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-file-alt nav_icon"></i> 
                                Habilidades
                            </a>
                        </li>
                        {/* <li className="nav_item">
                            <a href="#services" 
                            onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                Services
                            </a>
                        </li> */}
                        <li className="nav_item">
                            <a href="#portfolio" 
                            onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-scenery nav_icon"></i> 
                                Portfólio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact"
                            onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-message nav_icon"></i>
                                Contato
                            </a>
                        </li>
                        
                        
                        
                    </ul>
                    
                    <i className="uil uil-times nav_close" onClick={toggleMenu}></i>
                </div>

                <div className={Toggle ? "hidden-button" : "nav_toggle"} onClick={toggleMenu}>
                    <i className="uil uil-apps"></i>
                </div>
                <div className={Toggle ? "hidden-button" : ""}>
                <ToggleTheme/>
                </div>
            </nav>
        </header>
    )
}


export default Header