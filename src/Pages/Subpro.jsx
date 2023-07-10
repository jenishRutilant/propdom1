import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Style/Subpro.css';
import Navbar from '../Component/Navbar2';
import Footer from '../Component/Footer';

function Subpro() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container12">
                <div className='routing'>
                    <div className='flexRouting'>
                        <Link to="/">Home <i className="fa-solid fa-chevron-right"></i></Link>
                        <Link to="/">property in gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>builder floor in gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>builder floor in sector 65 gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>3 BHK builder floor in sector 65 gurgaon  <i className="fa-solid fa-chevron-right"></i> </Link>
                    </div>
                    <div className='DateRouting'>
                        <span>posted on apr 27,2023  </span>
                        <span>ready to move </span>
                    </div>
                </div>
                <div className='box-area'>
                    <div className='box-img'>
                        <img src={require('../Assets/first.jpeg')} alt="" className='img-fluid'/>
                    </div>
                    <div>
                        <h2>advertisment area</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container12">
                <div className='img-area'>
                    <div className='img-box'>
                        <img src={require('../Assets/badroom.jpeg')} alt="" className='img-fluid'/>
                    </div>
                    <div>
                        <h1>hello</h1>
                    </div>
                </div>
                <div className='box-area'>
                    <div className='box-img'>
                        <img src={require('../Assets/first.jpeg')} alt="" className='img-fluid'/>
                    </div>
                    <div>
                        <h2>advertisment area</h2>
                    </div>
                </div>
                <div className='property'>
                    <p className='pp-name'>Why you should consider this property?</p>
                </div>
                <div className='highlights'>
                    <div className='key-highlights'>
                        <h5>key highlights  </h5>
                        <span>of the property</span>
                    </div>
                    <div className='key-property'>
                        <ul>
                            <li> <i className="fa-solid fa-check "></i>overlooking park/garden</li>
                            <li> <i className="fa-solid fa-check "></i>Club/ Community Center</li>
                            <li> <i className="fa-solid fa-check "></i>Gated Society</li>
                            <li> <i className="fa-solid fa-check "></i>East Facing</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='about-property'>
                    <h2>About Property</h2>
                    <p>Address: Sector 65 Gurgaon, Gurgaon, Haryana <br />
                        1. Unique property (Jemma block) facing the length of the park. 2. On the widest road of jemma block (15 meters). 3. Cross ventilation and not facing any floor/house in the front or back. Unobstructed view. 4. Front park facing terrace. 5. Additional benefit of parking space on the side of the park...</p>
                </div>
                <hr />
                <div className='about-property'>
                    <h2 >Semifurnished</h2>
                    <div>
                        <h6>Furnishing Details</h6>
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-6">
                                <div className="col">4 Wardrobe</div>
                                <div className="col">4 Fan</div>
                                <div className="col">1 Exhaust Fan</div>
                                <div className="col">3 Geyser</div>
                                <div className="col">9 Light</div>
                                <div className="col">1 Modular Kitchen</div>
                                <div className="col">1 Chimney</div>
                                <div className="col">No AC</div>
                                <div className="col">No Bed</div>
                                <div className="col">No Curtains</div>
                                <div className="col">No Dining Table</div>
                                <div className="col">No Microwave</div>
                                <div className="col">No Fridge</div>
                                <div className="col">No Sofa</div>
                                <div className="col">No Stove</div>
                                <div className="col">No TV</div>
                                <div className="col">No Washing Machine</div>
                                <div className="col">No Water Purifier</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='about-property'>
                    <h2 >Features</h2>
                    <div>
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-6">
                                <div className="col">Security / Fire Alarm</div>
                                <div className="col">Feng Shui / Vaastu Compliant</div>
                                <div className="col">Private Garden / Terrace</div>
                                <div className="col">Intercom Facility</div>
                                <div className="col">Water purifier</div>
                                <div className="col">Lift(s)</div>
                                <div className="col">High Ceiling Height</div>
                                <div className="col">Maintenance Staff</div>
                                <div className="col">Water Storage</div>
                                <div className="col">Piped-gas</div>
                                <div className="col">Visitor Parking</div>
                                <div className="col">Swimming Pool</div>
                                <div className="col">Park</div>
                                <div className="col">Security Personnel</div>
                                <div className="col">Airy Rooms</div>
                                <div className="col">Fitness Centre / GYM</div>
                                <div className="col">Waste Disposal</div>
                                <div className="col">Rain Water Harvesting</div>
                                <div className="col">Club house / Community Center</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Subpro