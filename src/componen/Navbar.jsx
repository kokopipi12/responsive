import React from 'react';
import "../styles/navbar.css"
import "../styles/navigation.css"
const Navbar = () => {
    return ( <div className="div-utama"> 
    <nav>
        <span id="brand">
            <a href="index.html">Mr.KO</a>
        </span>

        <ul id="menu">
            <li><a href="indek.html">home<span>.</span></a></li>
            <li><a href="work.html">work<span>.</span></a></li>
            <li><a href="about.html">about<span>.</span></a></li>
            <li><a href="contact.htnl">contact<span>.</span></a></li>
        </ul>

        <div id="toggle">
          <div className="span">menu</div>

        </div>
    </nav>
        <div id="resize">
        <div className="close-btn">close</div>
        
        <ul id="menu">
            <li><a href="indek.html">home<span>.</span></a></li>
            <li><a href="work.html">work<span>.</span></a></li>
            <li><a href="about.html">about<span>.</span></a></li>
            <li><a href="contact.htnl">contact<span>.</span></a></li>
        </ul>
        </div>
    </div>

    
    
    );

  
}
 
export default Navbar;