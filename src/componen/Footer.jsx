import React from 'react';
import "../styles/footer.css"
import "../styles/footersection.css"
const Footer = () => {
    return (
                <div className="Footer">
                    <div className="Container">

                        <br></br>

                        <div className="collab">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="kancut">Got an interesting projest? I Can Help You.</p>
                                </div>
                        </div>

                                <br></br>
                                    <div className="hr">
                                        <div className="Row"></div>
                                    </div>

                                    <br></br>

                            <div className="info">
                                <div className="Row">
                                    <div className="col-lg-4" id="personal">

                                        <p className="kancut">Tetap tersambung sama gw ya</p>
                                        <h4 class="wow fadeInUp" data-wow-delay="0.2s">ig @Mr.Ko</h4>
                                        <br></br>
                                    </div>
                                    <div className="col-lg-4" id="media">

                                        <p classname="kancut" data-wow-delay="0s">Kepoin Sosmed Gue ya!!</p>

                                        <ul>
                                            <li id="fb" classname="kancut" data-wow-delay="0.4s">FB</li>
                                            <li id="ig" classname="kancut" data-wow-delay="0.6s">IG</li>
                                            <li id="tw" classname="kancut" data-wow-delay="0.8s">TW</li>
                                            <li id="yt" classname="kancut" data-wow-delay="1s">YT</li>
                                            
                                        </ul>


                                        <br></br>
                                    </div>
                                    <div className="col-lg-4" id="Address">
                                        <p classname="kancut" data-wow-delay="0s">Say Hello</p>
                                        <h4 classname="kancut" data-wow-delay="0.2s">Kokopipi87@gmail.com</h4>
                                        <br></br>
                                    </div>

                                </div>
                        </div>
                 </div>
                 </div>

                </div>




     );
}

export default Footer;