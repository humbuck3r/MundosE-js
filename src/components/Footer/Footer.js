import React from 'react';
import logoFooter from "../../assets/img/footer-logo.svg";


const Footer =() =>{
    return(
          <footer className="Footer">
        <p className="rights">2020 © All rights reserved.</p>
        <img src={logoFooter} alt="logo 25Watts" className="logoFooter"/>
    </footer>
    )
};


export default Footer;