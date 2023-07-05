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
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(10); // Number of properties to display per page

    // Assuming you have an array of property data
    const properties = [
        {
            id: 1,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '1.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/banner.jpg')
        },
        {
            id: 2,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '2.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/first.jpeg')
        },
        {
            id: 3,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '3.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/ios.png')
        },
        {
            id: 4,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '4.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/Play.png')
        },
        {
            id: 5,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '5.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/R.png')
        },
        {
            id: 6,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '6.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        {
            id: 7,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '7.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/banner.jpg')
        },
        {
            id: 8,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '8.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/first.jpeg')
        },
        {
            id: 9,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '9.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/ios.png')
        },
        {
            id: 10,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '10.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/Play.png')
        },
        {
            id: 11,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '11.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/R.png')
        },
        {
            id: 12,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '12.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        {
            id: 13,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '13.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/banner.jpg')
        },
        {
            id: 14,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '14.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/first.jpeg')
        },
        {
            id: 15,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '15.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/ios.png')
        },
        {
            id: 16,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '16.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/Play.png')
        },
        {
            id: 17,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '17.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/R.png')
        },
        {
            id: 18,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '18.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        {
            id: 19,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '18.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        {
            id: 20,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '18.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        {
            id: 21,
            location: 'sector 42 gurugram',
            name: 'adani m2k oyster grande',
            price: '18.80 Lac',
            pricePerSqft: '3312.00/sq/ft.',
            size: '368 Sqyard',
            superBuiltUpArea: '307.69 Super built-up Area',
            photo: require('../Assets/second.jpeg')
        },
        // Add more property objects here
    ];

    // Logic for displaying properties
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Calculate total number of pages
    const totalPages = Math.ceil(properties.length / propertiesPerPage);
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
                    <div className='flex'>

                        {/* Filter */}

                        <div className='sidebar'>
                            <div className='flex justify-content align-items'>
                                <h6 className='a-f'>Applied Filters</h6>
                                <Link to="#">clear all</Link>
                            </div>
                            <div className=''>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
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
                                <button> <i className="fa-solid fa-bars-staggered"></i>Residential Apartment</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>Builder Floor</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>Residential Land</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>Independent House/Villa</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>1 RK/ Studio Apartment</button>
                            </div>
                            <hr />
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <button><i className="fa-solid fa-bars-staggered"></i>1Rk/ 1Bhk</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>2Bhk</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>3Bhk</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>4Bhk</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>5Bhk</button>
                            </div>
                            <hr />
                            <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <button> <i className="fa-solid fa-bars-staggered "></i>owner</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>builder</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>dealer</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>feature dealer</button>
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
                                <button> <i className="fa-solid fa-bars-staggered "></i>owner</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>builder</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>dealer</button>
                                <button><i className="fa-solid fa-bars-staggered"></i>feature dealer</button>
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
                                {currentProperties.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}

                                {/* Pagination */}
                                <div className="pagination">
                                    {Array.from({ length: totalPages }).map((_, index) => (
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