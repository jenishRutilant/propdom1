import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "../Style/Home.css"
import ImageSlider from './ImageSlider'
import Footer from '../Component/Footer'
// import data from "../Data";
import Select from 'react-select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router'
import axios from 'axios'
import apiConst from '../GlobalConst/ApiKeys'

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    allList();
    allthPro();
  }, []);

  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [activeTag, setActiveTag] = useState(1);

  const [category, setCategory] = useState();
  const [category1, setCategory1] = useState();
  const [category2, setCategory2] = useState();
  const [category3, setCategory3] = useState();
  const [category4, setCategory4] = useState();

  const allList = () => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiConst.list,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCategory(response.data.category[0])
        setCategory1(response.data.category[1])
        setCategory2(response.data.category[2])
        setCategory3(response.data.category[3])
        setCategory4(response.data.category[4])
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

  const handleClick = (tabIndex) => {
    setActiveTag(tabIndex);
  }
  
  const handleInputChange = (selectedOption) => {
    console.log(selectedOption);
    filteredData(selectedOption)
  };
  
  const [search, setSearch] = useState([])
  const [selectedValue, setSelectedValue] = useState()

  const navigate = useNavigate();
  const filterPage = () => {
    navigate('/filter')
  }

  let data1 = JSON.stringify({
    "search": search
  });
  
  const [abcd, setAbcd] = useState(search);
  console.log(abcd);

  const onChange = (value) => {
    console.log(value);
    setSelectedValue(value)
  }

  const filteredData = (e) => {
    const searchValue = typeof e === 'string' ? e : String(e);
    const abcs = search.filter((item) => item?.name?.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    setAbcd(abcs);
  };

  const allthPro = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiConst.pro_list,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data1
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.property);
        setSearch(response.data.property)
        setAbcd(response.data.property)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const options = abcd?.map(({ name, _id }) => ({
    id: _id,
    label: name,
  }));

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="main-div-home">
        <div className='banner-img'>
          <img src={require("../Assets/banner.jpg")} alt=" " />
        </div>
        <div style={{ width: "100" }}>
          <div className="center-btns">
            <div onClick={() => handleClick(1)} className={activeTag === 1 ? 'all-btns-active' : 'all-btns'} to='#buy'>{category?.name}</div>
            <div onClick={() => handleClick(2)} className={activeTag === 2 ? 'all-btns-active' : 'all-btns'} to="#rent">{category1?.name}</div>
            <div onClick={() => handleClick(3)} className={activeTag === 3 ? 'all-btns-active' : 'all-btns'} to="#projects">{category2?.name}</div>
            <div onClick={() => handleClick(4)} className={activeTag === 4 ? 'all-btns-active' : 'all-btns'} to="#builders">{category3?.name}</div>
            <div onClick={() => handleClick(5)} className={activeTag === 5 ? 'all-btns-active' : 'all-btns'} to="#dealer">{category4?.name}</div>
          </div>
        </div>
        <div className="bottom-side">
          <form className="display-flex-bottom" onSubmit={filterPage}>
            <div className="dropdown" id="valueItemDrop">
              <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                All Property Types <i className="fa-solid fa-angle-down"></i>
              </button>
              <ul className="dropdown-menu dp" aria-labelledby="dLabel">
                <li className="checkbox form-group">
                  <input type="checkbox" id="valuePot" value="Value Pot" name="Value Pot" />
                  <label className='lebel123' htmlFor="valuePot">Flat/Apartment</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="payback" value="Payback" name="Payback" />
                  <label className='lebel123' htmlFor="payback">Builder Floor</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="writeOff" value="Write-off" name="Write-off" />
                  <label className='lebel123' htmlFor="writeOff">Villa</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="offset" value="Offset" name="Offset" />
                  <label className='lebel123' htmlFor="offset">Land</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">House</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Ready to move offices</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Shops & Retail</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Warehouse</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Factory & Manufacturing</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Bare shell offices</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Commercial/Inst. Land</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Industrial Land/Plots</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Cold Storage</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Hotel/Resorts</label>
                </li>
              </ul>
            </div>
            <div className='upper-home'>
              <div className='search-p'>
                <Select
                  options={options}
                  onChange={onChange}
                  onInputChange={handleInputChange}
                  isSearchable
                  // menuIsOpen={isMenuOpen}
                  isMulti={true}
                  required
                  value={selectedValue}
                  closeMenuOnSelect={false}
                />

                {/* <Stack spacing={3} sx={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={options.map((option) => option.name)}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip key={index} variant="outlined" label={option.label} {...getTagProps({ index })} />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="outlined-multiline-static"
                      />
                    )}
                  />

                </Stack> */}

                {/* <input type="text" onChange={filteredData}/> */}
                {/* {abcd.map(item => (
                  <p>{item.name}</p>
                ))} */}
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