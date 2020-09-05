import React from 'react';
import "../styles/footer.css"
const Footer = () => {
    return ( 
                <div className="Footer">
                    <div className="Container">

                        <br></br><br></br>

                        <div className="collab">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="kancut">Got an interesting projest? I Can Help You.</p>
                                </div>
                            </div>
                        </div>
                                <br></br>
                                    <div className="hr">
                                        <div className="Row"></div>
                                    </div>

                                    <br></br><br></br>

                            <div className="info">
                                <div className="Row">
                                    <div className="col-lg-4" id="personal">
                                        <p>Tetap tersambung sama gw ya</p>
                                        <h4>ig @Mr.Ko</h4>
                                        <br></br><br></br>
                                    </div>
                                    <div className="col-lg-4" id="media">
                                        <p>Kepoin Sosmed Gue ya!!</p>
                                        
                                        <ul>
                                            <li id="FB">FB</li>
                                            <li id="IG">IG</li>
                                            <li id="TW">TW</li>
                                            <li id="YT">YT</li>
                                        </ul>
                                        <br></br><br></br>
                                    </div>
                                    <div className="col-lg-4" id="Addres">
                                        <p>Say Hello</p>
                                        <h4>Kokopipi87@gmail.com</h4>
                                        <br></br><br></br>
                                    </div>

                                </div>
                            </div>
                    </div>

                </div>




     );
}
 
export default Footer;