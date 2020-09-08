import React from 'react'
import "../styles/kepala.css"
import "../styles/projek1.css"
import "bootstrap/dist/css/bootstrap.css"
const Projek  = () => {
    return (<div className="container-fluid">
                    <br></br><br></br><br></br>
            <h6>Select Projek</h6>
            <div className="Vertical"></div>
            <br></br>
            <div className="Whitespace"></div>
            <div className="Whitespace"></div>

            <div className="Row">
                
                            <div className="col-lg-8"></div>
            <div className="col-lg-4 project project1" onClick="location.href='project.html"></div>

            </div>
            <div className="whitespace"></div>

            <div className="Row">
          
            <div className="col-lg-6 project project2" onClick="location.href='project.html"></div>
            <div className="col-lg-6"></div>
            </div>

            <div className="whitespace"></div>

            <div className="row">
            <div className="col-lg-7"></div>

             <div className="col-lg-4 project project3" onClick="location.href='project.html"></div> 

             <div className="col-lg-1"></div>
            </div>

            <div className="whitespace"></div>

                    <div className="row">
                    <div className="col-lg-1"></div>

                    <div className="col-lg-5 project project3" onClick="location.href='project.html"></div> 

                    <div className="col-lg-6"></div>
                    </div>

    </div>
       
    );

  
}
 
export default Projek; 