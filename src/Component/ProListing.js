import React, { useEffect, useState } from 'react';
import makeAPIRequest from '../global/apiCall';
import API_CONST from '../global/apiKey';
import './PropertyCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function ProListing() {
    const [propertyData, setPropertyData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    // Get List Of Sub Property Type
    
    useEffect(() => {
        makeAPIRequest('get', `${API_CONST.get_temp_property}`, null, null, null)
            .then((response) => {
                // console.log("🚀 ~ file: PropertyCard.js:28 ~ .then ~ response:", response)
                setPropertyData(response.data.tempProps)
            })
            .catch(async (error) => {
                console.log(error);
            })
    }, [])

    // Change Property Status
    const changePropertyStatus = (propertyId, propertyStatus) => {
        const data = {
            propertyId: propertyId,
            propertyStatus: propertyStatus
        }
        makeAPIRequest('post', `${API_CONST.update_property_status}`, data, null, null)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        pauseOnHover: false,
                    });
                }
            })
            .catch(async (error) => {
                console.log(error);
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    pauseOnHover: false,
                });
            })
    }

    return (
        <section className='property-listing'>
            <input type="text" onChange={(event) => setSearchTerm(event.target.value)} name='search' />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>Property Listing</h1>
                        <div className="table-responsive-lg">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Purpose</th>
                                        <th scope="col">Property Type</th>
                                        <th scope="col">Sub Property Type</th>
                                        <th scope="col" colSpan={2} className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        propertyData.filter((filterItem) => {
                                            if (searchTerm === "") {
                                                return filterItem;
                                            } else if (filterItem.subPropertyType.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                                                return filterItem;
                                            }
                                        }).map((items, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td> {items._id} </td>
                                                    <td> {items.propertyPurpose} </td>
                                                    <td> {items.propertyType} </td>
                                                    <td> {items.subPropertyType} </td>
                                                    <td align='center'><button type="button" className="btn btn-primary btn-md" onClick={() => changePropertyStatus(items._id, 'approved')}>Approved</button></td>
                                                    <td align='center'><button type="button" className="btn btn-secondary btn-md" onClick={() => changePropertyStatus(items._id, 'suspend')}>Suspend</button></td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default ProListing
