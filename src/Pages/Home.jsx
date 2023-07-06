import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "../Style/Home.css"
import ImageSlider from './ImageSlider'
import Footer from '../Component/Footer'
import Select from 'react-select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import apiConst from '../GlobalConst/ApiKeys'
import ApiCall from '../GlobalConst/ApiCall'

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    allList();
    allthelist();
  }, []);

  const [activeTag, setActiveTag] = useState();
  const [category, setCategory] = useState([]);
  const [property, setProperty] = useState([]);
  const [options  , setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const allList = () => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiConst.list,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCategory(response.data.category)
        console.log(category);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const allPropertyList = (categoryId) => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${apiConst.pro_types}=${categoryId}`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        setProperty(response.data.propertyType)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const images = [
    'https://i.imgur.com/SLhqvuO.jpeg',
    'https://i.imgur.com/ha5D75D.jpeg',
  ];

  const des = [
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort,',
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort',
  ]

  const [disablebtn, setdisablebtn] = useState(true)

  const handleClick = (tabIndex, categoryId) => {
    setActiveTag(tabIndex);
    allPropertyList(categoryId);
    setdisablebtn(false)
  }

  const allthelist = () => {
    ApiCall("get", apiConst.pro_list, null, null, null)
      .then(function (response) {
        console.log(response.data.property[0].property);
        const fetchedOptions = response.data.property[0].property.map(item => ({
          label: item.name
        }));
        setOptions(fetchedOptions);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  // const selectFunction = selectedOptions?.map(option => option.value)
  // const [property123, setProperty] = useState([])


  const [area, setArea] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()

  var searchData = JSON.stringify({
    area: options
    // city: options[1],
    // state: options[2]
  });
  // {"area":[{"label":["Sector 42","Gurugram","Haryana"]}
  // console.log(searchData);

  const search = () => {
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiConst.search,
      headers: {
        'Content-Type': 'application/json'
      },
      data: searchData
    };
    console.log(config.data);

    axios(config)
      .then(function (response) {
        console.log(response);
        setArea(response.data.property);
        setCity(response.data.property);
        setState(response.data.property);
        localStorage.setItem('propertyData', JSON.stringify(response.data.property));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const filterPage = (e) => {
    e.preventDefault();
    search();
    // navigate('/filter')
    // window.location.href = "/filter"
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="main-div-home">
        <div className='banner-img'>
          <img src={require("../Assets/banner.jpg")} alt=" " />
        </div>
        <div className="center-btns">
          {
            category?.map((item, i) => (
              <div key={i} >
                <div onClick={() => handleClick(i, item._id)} className={activeTag === i ? 'all-btns-active' : 'all-btns'} >{item?.name}</div>
              </div>
            ))
          }
        </div>
        <div className="bottom-side">
          <form className="display-flex-bottom" onSubmit={filterPage}>
            <div className="dropdown" id="valueItemDrop">
              <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" disabled={disablebtn ? true : ""}>
                All Property Types <i className="fa-solid fa-angle-down"></i>
              </button>
              {
                property.length > 0 &&
                <ul className="dropdown-menu dp" aria-labelledby="dLabel">
                  {
                    property.map((item) => {
                      return (
                        <li key={item?._id} className="checkbox form-group">
                          <input type="checkbox" id={item?._id} value={item?.name} name={item?.name} />
                          <label className='lebel123' htmlFor={item?._id}>{item?.name}</label>
                        </li>
                      )
                    })
                  }
                </ul>
              }
            </div>
            <div className='upper-home'>
              <div className='search-p'>
                <Select options={options} isMulti required />
              </div>
              <button className='search'>Search</button>
            </div>
          </form>
        </div>
        <ImageSlider images={images} des={des} />
      </div>
      <Footer />
    </>
  )
}

export default Home