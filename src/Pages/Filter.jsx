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

    const [min1, setmin] = useState();
    const [max1, setmax] = useState();
    const [min2, setmin2] = useState();
    const [max2, setmax2] = useState();

    const [filterData, setFilterData] = useState()
    console.log(filterData, "filterData")

    const sectorData = localStorage.getItem('sectorData');
    const areaData = localStorage.getItem('areaData');
    const cityData = localStorage.getItem('cityData');

    const [searchData, setsearchData] = useState([])
    const [category, setCategory] = useState([]);
    const [BHK, setBHK] = useState("")
    const [upperStatus, setUpperStatus] = useState("")


    // ------------- get data --------------------
    const search = useCallback(() => {
        var data = {
            area: sectorData.split(','),
            city: areaData.split(','),
            state: cityData.split(','),
        };

        ApiCall("post", apiConst.search, data, null, null)
            .then(function (response) {
                setsearchData(response.data.property)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [areaData, sectorData, cityData])
    // ------------- get data --------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(10);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    // const currentProperties = lol?.slice(indexOfFirstProperty, indexOfLastProperty);

    const totalPages = Math.ceil(searchData?.length / propertiesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (BHK !== "") {
            let newData = searchData.filter((item) => item.bed === BHK);
            return setFilterData(newData);
        }

        if (upperStatus !== "") {
            let newData = searchData.filter((item) => item.property_status === upperStatus);
            return setFilterData(newData);
        }


        if (min1 !== undefined && max1 !== undefined) {
            console.log(min1, max1);
            let newData = searchData.filter((item) => item.sale_price >= min1 && item.sale_price <= max1);
            console.log(newData);
            return setFilterData(newData);
        }

        if (min2 !== undefined && max2 !== undefined) {
            let newData1 = searchData.filter((item) => (
                Math.floor(item.property_size) >= min2 && Math.floor(item.property_size) <= max2
            ));
            console.log(newData1);
            return setFilterData(newData1);
        }
    }, [BHK, min1, max1, min2, max2, upperStatus])

    const onSearch = (min, max) => {
        setmin(min)
        setmax(max)
        // let newData = searchData.filter((item) => item.sale_price >= min && item.sale_price <= max);
        // setSlider(min, max);
    };

    const hello1 = (min, max) => {
        setmin2(min)
        setmax2(max)
        // setSlider1(min, max)
        // let newData = searchData.filter((item) => item.property_size >= min && item.property_size <= max);
        // setsearchData(newData)
    };

    const allBhk = (value) => {
        // let newData = searchData.filter((item) => item.bed === value);
        setBHK(value)
    };

    const status = (value, tabIndex) => {
        setUpperStatus(value);
        setActiveTag(tabIndex);
    };


    const allList = () => {
        ApiCall("get", apiConst.list, null, null, null)
            .then(function (response) {
                setCategory(response.data.category)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onClick = () => {
        window.location.reload();
    }

    const allsector = localStorage.getItem('sectorData').split(',');
    const [activeTag, setActiveTag] = useState();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        search();
        allList();
    }, [search]);

    return (
        <>
            <nav className="navbar1234">
                <div className="navbar-container1234 container1234">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines1234">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items1234">
                        <div className='flex align-items-center'>
                            <input type="text" className='' placeholder='Search By Locality' />
                            <i className="fa-solid fa-magnifying-glass search-123"></i>
                        </div>
                        <div className="pokl">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/CustomerService">Customer Service</Link></li>
                            <li><Link to="/plans">Plans</Link></li>
                            <li style={{ border: "none" }}><i className="orange fa-solid fa-bell"></i></li>
                        </div>
                    </ul>
                    <Link to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
                </div>
            </nav>
            <section className='section-y'>
                <div className="container12">
                    <div className='flex'>

                        {/* Filter */}

                        <div className='sidebar'>
                            <div className='flex justify-content align-items'>
                                <h6 className='a-f'>Applied Filters</h6>
                                <Link to="#" onClick={onClick}>clear all</Link>
                            </div>
                            {allsector?.map((item, index) => (
                                <div key={index}>
                                    <div className="allthesector"> {item}</div>
                                </div>
                            ))}
                            <div>
                                <span>Budget</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min1}L</h6>
                                    <h6 className='budget-btn'>{max1}L</h6>
                                </div>
                                <div className='min-max'>
                                    <div className="inner-div">
                                        <MultiRangeSlider min={0} max={100000000} onChange={onSearch} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* <h6>Property Type</h6>
                            <div className='property-btn' style={{ cursor: "pointer" }}>
                                {
                                    category?.map((item, i) => (
                                        <div key={i} >
                                            <div>{item?.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr /> */}
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <div
                                    className={`bedroom-option ${activeTag === '1' ? 'active' : ''}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => allBhk('1')}
                                >1BHK</div>
                                <div style={{ cursor: "pointer" }} onClick={() => allBhk('2')}>2BHK</div>
                                <div style={{ cursor: "pointer" }} onClick={() => allBhk('3')}>3BHK</div>
                                <div style={{ cursor: "pointer" }} onClick={() => allBhk('4')}>4BHK</div>
                                <div style={{ cursor: "pointer" }} onClick={() => allBhk('5')}>5BHK</div>
                            </div>
                            <hr />
                            {/* <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
                            </div>
                            <hr /> */}
                            <div>
                                <span>Area <br />sq.ft.</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min2}0sq.ft.</h6>
                                    <h6 className='budget-btn'>{max2}+ sq.ft.</h6>
                                </div>
                                <div className="min-max">
                                    <MultiRangeSlider min={0} max={1000} onChange={hello1} />
                                </div>
                            </div>
                            <hr />
                            {/* <h6>Localities</h6>
                            <div className='posted-btn'>
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
                            </div> */}
                        </div>

                        {/* Filter */}

                        <div className='right-card'>
                            <div className='category-btn'>
                                <button
                                    className={activeTag === 0 ? 'active-filter' : ''}
                                    onClick={() => status('All', 0)}
                                >
                                    all
                                </button>
                                <button
                                    className={activeTag === 1 ? 'active-filter' : ''}
                                    onClick={() => status('Owner', 1)}
                                >
                                    owner
                                </button>
                                <button
                                    className={activeTag === 2 ? 'active-filter' : ''}
                                    onClick={() => status('Verified', 2)}
                                >
                                    verified
                                </button>
                                <button
                                    className={activeTag === 3 ? 'active-filter' : ''}
                                    onClick={() => status('UnderConstruction', 3)}
                                >
                                    under construction
                                </button>
                                <button
                                    className={activeTag === 4 ? 'active-filter' : ''}
                                    onClick={() => status('ReadyToMove', 4)}
                                >
                                    ready to move
                                </button>
                            </div>

                            <div>
                                {
                                    filterData?.length === 0 ?
                                        upperStatus === '' && BHK === '' && filterData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                            <PropertyCard key={index} property={property} />
                                        )) : searchData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                            <PropertyCard key={index} property={property} />
                                        ))

                                }

                                {/* {

                                    searchData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                        <PropertyCard key={index} property={property} />
                                    ))

                                } */}

                                {/* {
                                    (BHK !== '' && max2 !== '' && min2 !== '' && upperStatus !== '') && filterData?.length !== 0 && filterData?.map((property, index) => (
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