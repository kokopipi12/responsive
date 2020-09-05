import React from "react";
import "../styles/typewrite.css"
import Typewriter from "typewriter-effect"
import "../styles/hero.css"
const Section  = () => {
    return ( <div className="div Utama"> <div className="div Hero">
        <div className="div header">
           {/* <h1 className="line anin-typewriter">I Make Brand Mater In Culture.</h1> */}
           <Typewriter id="test" onInit = {(typewriter) => {
               typewriter.typeString('Coming soon!! Sabar Bosku :)').pauseFor(1000).start();
           }} />
        </div>

    </div>
    <div className="scroll-down"></div>
    </div> 
    );

  
}
 
export default Section; 