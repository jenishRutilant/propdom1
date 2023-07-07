import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../Style/Filter.css"

const Property = ({ property }) => {

    const { area, name, original_price, sale_price, property_size, size, superBuiltUpArea, image_link } = property;

    const [h1, seth1] = useState()
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const helloooo = localStorage.getItem('propertyData')
        seth1(JSON.parse(helloooo))
    }, []);

    console.log(h1);

    return (
        <div className="allBorder">
            <div className="flex">
                <div className="img-card">
                    <div className="card-pic">
                        <img src={image_link} alt="image_link" className="img-fluid" />
                    </div>
                </div>
                <div className="card-information">
                    <Link className='p-tag' to="/subpro">{area}</Link>
                    <p className='p-tag'>{name}</p>
                    <div className="flex gap">
                        <div className='main-price'>
                            <div className="both-price">
                                <div className='original_price'> Original Price: <span>₹{original_price}</span></div>
                                <br />
                                <div className='original_price'> Sale Price: <span>₹{sale_price}</span></div>
                                <br />
                            </div>
                            <div className='original_price'> Property Size: <span>{property_size}</span></div>
                        </div>
                        <div>
                            <h6 className="text-center">{size}</h6>
                            <span className='main-span'>{superBuiltUpArea}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-content align-items mt-3">
                        <button className="btn-contact2">view phone number</button>
                        <button className="btn-contact1">contact dealer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property