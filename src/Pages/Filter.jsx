import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Filter.css'
import Navbar2 from '../Component/Navbar2'
import Footer from '../Component/Footer'
import PropertyCard from '../Pages/Property';
import MultiRangeSlider from '../Pages/MultiRangeSlider'
import apiConst from '../GlobalConst/ApiKeys'
import ApiCall from '../GlobalConst/ApiCall'

function Filter() {

    const [min1, setmin] = useState(1);
    const [max1, setmax] = useState();
    console.log(min1);

    const [min2, setmin2] = useState();
    const [max2, setmax2] = useState();

    const sectorData = localStorage.getItem('sectorData');
    const areaData = localStorage.getItem('areaData');
    const cityData = localStorage.getItem('cityData');

    const [lol, setlol] = useState([])
    const [searchData, setsearchData] = useState([])
    console.log(searchData);
    const [size, setSize] = useState([])

    const search = useCallback(() => {
        var data = {
            area: sectorData.split(','),
            city: areaData.split(','),
            state: cityData.split(','),
        };

        ApiCall("post", apiConst.search, data, null, null)
            .then(function (response) {
                setlol(response.data.property)
                setsearchData(response.data.property)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [areaData, sectorData, cityData])

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(10);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    // const currentProperties = lol?.slice(indexOfFirstProperty, indexOfLastProperty);

    const totalPages = Math.ceil(searchData?.length / propertiesPerPage);
    console.log(totalPages);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // --------------- Search data-----------------
    const onSearch = (min, max) => {
        setmin(min)
        setmax(max)
        let minVal = min;
        let maxVal = max;
        let fData = lol?.filter((item) => {
            const price = parseInt(item?.sale_price);
            if (typeof price === 'number') {
                return price >= minVal && price <= maxVal;
            }
            else {
                alert("Please select")
            }
            return false;
        });
        setsearchData(fData)
    }
    // --------------- Search data-----------------

    const hello1 = (min, max) => {
        let minVal = min;
        let maxVal = max;
        let fData = searchData?.filter((item) => {
            const price = parseInt(item?.property_size);
            if (typeof price === 'number') {
                return price >= minVal && price <= maxVal;
            }
            else {
                alert("Please select")
            }
            return false;
        });
        setSize(fData)
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        search();
    }, []);

    return (
        <>
            <Navbar2 />
            <section className='section-y'>
                <div className="container12">
                    <div className='flex'>

                        {/* Filter */}

                        <div className='sidebar'>
                            <div className='flex justify-content align-items'>
                                <h6 className='a-f'>Applied Filters</h6>
                                <Link to="#">clear all</Link>
                            </div>
                            <div className=''>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                                <div className='allthesector'>sector 47 gurgaon</div>
                            </div>
                            <div>
                                <span>Budget</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min1}L</h6>
                                    <h6 className='budget-btn'>{max1}L</h6>
                                </div>
                                <div className='min-max'>
                                    <div className="inner-div">
                                        <MultiRangeSlider min={0} max={100000000} onChange={({ min, max }) => onSearch(min, max)} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h6>Property Type</h6>
                            <div className='property-btn'>
                                <div>Residential Apartment</div>
                                <div>Builder Floor</div>
                                <div>Residential Land</div>
                                <div>Independent House/Villa</div>
                                <div>1 RK/ Studio Apartment</div>
                            </div>
                            <hr />
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <div>1Rk/ 1Bhk</div>
                                <div>2Bhk</div>
                                <div>3Bhk</div>
                                <div>4Bhk</div>
                                <div>5Bhk</div>
                            </div>
                            <hr />
                            <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
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
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
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
                                {
                                    searchData.length > 0 ? (
                                        (searchData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                            <PropertyCard key={index} property={property} />
                                        )))) : (
                                        (size?.map((property, index) => (
                                            <PropertyCard key={index} property={property} />
                                        )))
                                    )
                                }
                                {/* {
                                    searchData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                        <PropertyCard key={index} property={property} />
                                    ))
                                } */}

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