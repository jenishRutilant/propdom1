import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Filter.css'
import Navbar2 from '../Component/Navbar2'
import Footer from '../Component/Footer'
import PropertyCard from '../Pages/Property';
import MultiRangeSlider from '../Pages/MultiRangeSlider'

function Filter() {

    const [min1, setmin] = useState(1);
    const [max1, setmax] = useState();
    const [min2, setmin2] = useState();
    const [max2, setmax2] = useState();
    // const [value, setvalue] = useState({ min1: '1', max1: '2' })
    const [h1, seth1] = useState()

    const sectorData = localStorage.getItem('sectorData');
    const areaData = localStorage.getItem('areaData');
    const cityData = localStorage.getItem('cityData');

    const allData = {
        sector: sectorData,
        area: areaData,
        city: cityData
    };
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        
    }, []);
    console.log(h1);

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(10); // Number of properties to display per page

    // Logic for displaying properties
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = h1?.slice(indexOfFirstProperty, indexOfLastProperty);
    console.log(currentProperties);

    // Calculate total number of pages
    const totalPages = Math.ceil(h1?.length / propertiesPerPage);
    console.log(totalPages);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    // const [value, setValue] = useState(0);
    const hello = (min, max) => {
        setmin(min)
        setmax(max)

    };
    const hello1 = (min, max) => {
        setmin2(min)
        setmax2(max)

    };

    return (
        <>
            <Navbar2 />
            <section className='section-y'>
                <div className="container12">
                    <div className='main-div'>

                        {/* Filter */}

                        <div className='sidebar'>
                            <div className=''>
                                <h6 className='a-f'>Applied Filters</h6>
                                <Link to="#">clear all</Link>
                            </div>
                            <div className='mnb'>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                            </div>
                            <div>
                                <span>Budget</span>
                                {/* <div className='flex justify-content mt-1'> */}
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min1}</h6>
                                    <h6 className='budget-btn'>{max1}+L</h6>
                                </div>
                                <div className='min-max'>
                                    <div className="inner-div">
                                        <MultiRangeSlider min={0} max={1000000} onChange={({ min, max }) => hello(min, max)} />
                                        {/* <MultiRangeSlider min={0} max={100000} onChange={({ min, max }) => setmin(min)} /> */}
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <h6>Property Type</h6>
                            <div className='property-btn'>
                                <div><i className="fa-solid fa-bars-staggered"></i>Residential Apartment</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>Builder Floor</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>Residential Land</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>Independent House/Villa</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>1 RK/ Studio Apartment</div>
                            </div>
                            <hr />
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <div><i className="fa-solid fa-bars-staggered"></i>1Rk/ 1Bhk</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>2Bhk</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>3Bhk</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>4Bhk</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>5Bhk</div>
                            </div>
                            <hr />
                            <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <div> <i className="fa-solid fa-bars-staggered "></i>owner</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>builder</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>dealer</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>feature dealer</div>
                            </div>
                            <hr />
                            <div>
                                <span>Area <br />sq.ft.</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min2}0sq.ft.</h6>
                                    <h6 className='budget-btn'>{max2}+ sq.ft.</h6>
                                </div>
                                <div className="min-max">
                                    <MultiRangeSlider min={0} max={4000} onChange={({ min, max }) => hello1(min, max)} />
                                </div>
                            </div>
                            <hr />
                            <h6>Localities</h6>
                            <div className='posted-btn'>
                                <div><i className="fa-solid fa-bars-staggered "></i>owner</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>builder</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>dealer</div>
                                <div><i className="fa-solid fa-bars-staggered"></i>feature dealer</div>
                            </div>
                        </div>

                        {/* Filter */}

                        <div className='right-card'>
                            <div className='category-btn'>
                                <button>all</button>
                                <button>ower</button>
                                <button>verified</button>
                                <button>under construcation</button>
                                <button>ready to move</button>
                            </div>

                            <div>
                                {currentProperties?.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}

                                {/* Pagination */}
                                <div className="pagination">
                                    {Array.from({ length: totalPages })?.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={currentPage === index + 1 ? 'active' : 'pagi'}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Filter