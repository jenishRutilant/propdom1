import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Property = ({ property }) => {

    const { area, name, original_price, sale_price, pricePerSqft, size, superBuiltUpArea, image_link } = property;

    const [h1, seth1] = useState()
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const helloooo = localStorage.getItem('propertyData')
        seth1(JSON.parse(helloooo))
    }, []);

    console.log(h1);

    return (
        <div className="flex mt-3">
            <div className="img-card">
                <div className="card-pic">
                    <img src={image_link} alt="image_link" className="img-fluid" />
                </div>
            </div>
            <div className="card-information">
                <Link to="/subpro">{area}</Link>
                <p>{name}</p>
                <div className="flex gap">
                    <div>
                        <h6 className="text-center">{original_price}</h6>
                        <h6 className="text-center">{sale_price}</h6>
                        <span>{pricePerSqft}</span>
                    </div>
                    <div>
                        <h6 className="text-center">{size}</h6>
                        <span>{superBuiltUpArea}</span>
                    </div>
                </div>
                <hr />
                <div className="flex justify-content align-items mt-3">
                    <button className="btn-contact2">view phone number</button>
                    <button className="btn-contact1">contact dealer</button>
                </div>
            </div>
        </div>
    )
}

export default Property