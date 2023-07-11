import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Style/Filter.css"
import image from "../Assets/R.png"

const Property = ({ property }) => {
    // image_link
    const { area, city, measurement_unit, owner_name, propertyName, original_price, sale_price, property_size, size, superBuiltUpArea, _id } = property;
    const [h1, seth1] = useState()
    const navi = useNavigate();
    const onId = (id) => {
        console.log(id);
        sessionStorage.setItem('image_link', JSON.stringify(id))
        navi("/subpro")
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const helloooo = localStorage.getItem('propertyData')
        seth1(JSON.parse(helloooo))
    }, []);

    return (
        <div className="allBorder">
            <div className="flex" style={{ cursor: "pointer" }} onClick={() => onId(property)}>
                <div className="img-card">
                    <div className="card-pic">
                        <img src={image} alt="image_link" className="img-fluid" />
                    </div>
                </div>
                <div className="card-information">
                    <div className='p-tag'>{area}</div>
                    <p className='p-name'>{propertyName}</p>
                    <div className="flex gap">
                        <div className='main-price'>
                            <div className="both-price">
                                <div className='original_price'> Original Price: <span>₹{original_price}</span></div>
                                <br />
                                <div className='original_price'> Sale Price: <span>₹{sale_price}</span></div>
                                <br />
                            </div>
                            <div className='original_price'> Property Size: <span>{property_size} {measurement_unit}</span></div>
                        </div>
                        <div>
                            <h6 className="text-center">{size}</h6>
                            <span className='main-span'>{superBuiltUpArea}</span>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="flex justify-content align-items">
                        <button className="btn-contact2">View Phone Number</button>
                        <button className="btn-contact1">Contact Dealer</button>
                    </div>
                    <div>
                        <p className='on'>Owener Name: {!owner_name ? "landDam" : owner_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property