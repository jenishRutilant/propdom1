import React, { useEffect, useRef, useState } from "react";
import makeAPIRequest from "../GlobalConst/apiCalls";
import API_CONST from "../GlobalConst/apiKey";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MainInfo from "./MainInfo";
import BasicInfo from "./BasicInfo";
import ProInternalInfo from "./ProInternalInfo";
import OwnerInfo from "./OwnerInfo";
import ProAddress from "./ProAddress";
import '../Style/PropertyCard.css'


function PropertyCard() {
  const [propertyPurpose, setPropertyPurpose] = useState("sell");
  const [propertyType, setPropertyType] = useState("residential");
  const [subPropertyType, setSubPropertyType] = useState("");
  const [propertyData, setPropertyData] = useState([]);
  const [activeTag, setActiveTag] = useState(1);
  const [cardCount, setCardCount] = useState(1);
  const [image, setImage] = useState("");
  const [propertyInfo, setPropertyInfo] = useState({
    p_furnitureType: "",
    p_isAuthorised: "",
    p_masurementUnit: "",
    p_totalSize: "",
    p_useArea: "",
    p_openArea: "",
    p_coverArea: "",
    p_boundries: "",
    p_ownerShipSinces: "",
    p_availableDate: "",
    p_treeCount: "",
    p_purchasedFrom: "",
    p_maxAsk: "",
    p_mainRoadFacing: "",
    p_entryGate: "",
    p_carParkArea: "",
    p_bathrooms: "",
    p_pantry: "",
    p_cabins: "",
    p_workStation: "",
    p_conference: "",
    p_totalFloors: "",
    p_amenities: "",
    p_maintainanceFees: "",
    p_balcony: "",
    p_kitchn: "",
    p_rooms: "",
    p_halls: "",
    p_toilates: "",
    p_ownerName: "",
    p_ownerDetails: "",
    p_ownerContact1: "",
    p_ownerContact12: "",
    p_ownerStatus: "",
    p_nationality: "",
    p_state: "",
    p_district: "",
    p_city: "",
    p_landMark: "",
    p_area: "",
    p_sector: "",
    p_flatNo: "",
    p_latitude: "",
    p_longitude: "",
    p_reMarkes: "",
  });
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  // Get List Of Sub Property Type
  useEffect(() => {
    makeAPIRequest(
      "get",
      `${API_CONST.view_property}?type=${propertyType}`,
      null,
      null,
      null
    )
      .then((response) => {
        // console.log(":rocket: ~ file: PropertyCard.js:28 ~ .then ~ response:", response)
        setPropertyData(response.data.data);
      })
      .catch(async (error) => {
        console.log(error);
      });
  }, []);
  // Set backgroundColor of activeTag
  const handleClick = (tagIndex, purpose) => {
    setActiveTag(tagIndex);
    setPropertyPurpose(purpose);
  };
  // Get List Of Sub Property Type when setPropertyType change
  const handleChange = (event) => {
    setPropertyType(event.target.value);
    makeAPIRequest(
      "get",
      `${API_CONST.view_property}?type=${event.target.value}`,
      null,
      null,
      null
    )
      .then((response) => {
        setPropertyData(response.data.data);
        setA(false);
        setB(false);
        setC(false);
        setD(false);
        setE(false);
      })
      .catch(async (error) => {
        console.log(error);
      });
  };
  // Show Sub Property
  const showInputFields = (index, subPropertyType) => {
    setSubPropertyType(subPropertyType);
    setA(true);
    if (cardCount != 1) {
      setCardCount(1);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
    }
  };
  // Show Next Card
  const handleNextCard = () => {
    setCardCount(cardCount + 1);
    if (cardCount === 1) {
      setB(true);
    } else if (cardCount === 2) {
      if (subPropertyType != "hotel" || subPropertyType != "factory") {
        setC(true);
      }
    } else if (cardCount === 3) {
      if (subPropertyType != "hotel" || subPropertyType != "factory") {
        setD(true);
      }
    } else if (cardCount === 4) {
      if (subPropertyType != "hotel" || subPropertyType != "factory") {
        setE(true);
      }
    }
  };
  // Get All Information Of Property
  const getPropertyDetails = (event) => {
    setPropertyInfo({
      ...propertyInfo,
      [event.target.name]: event.target.value,
    });
  };
  // Property Data Submit
  const formSubmit = (e) => {
    // e.preventDefault();
    const allPropertyInfo = {
      ...propertyInfo,
      propertyPurpose,
      propertyType,
      subPropertyType,
    };
    console.log(allPropertyInfo);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("allPropertyInfo", JSON.stringify(allPropertyInfo));
    makeAPIRequest("post", API_CONST.create_property_data, formData, null, null)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          alert("Success")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="card-main-body">
        <div className="container-1">
          <div className="row align-items-start">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-body">
                <div className="card-header-part">
                  <h3 className="mb-4">Start posting your property</h3>
                </div>
                <div className="card-body-part mt-4">
                  <div className="looking-property">
                    <span
                      onClick={() => handleClick(1, "sell")}
                      className={activeTag === 1 ? "bg-salmon" : ""}
                    >
                      Sell
                    </span>
                    <span
                      onClick={() => handleClick(2, "rent")}
                      className={activeTag === 2 ? "bg-salmon" : ""}
                    >
                      Rent
                    </span>
                  </div>
                  <div className="radio-btns mt-5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="residential"
                      >
                        <FormControlLabel
                          value="residential"
                          control={<Radio />}
                          label="Residential"
                          onChange={handleChange}
                        />
                        <FormControlLabel
                          value="commercial"
                          control={<Radio />}
                          label="Commercial"
                          onChange={handleChange}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="property-type-details mt-2">
                    {propertyData.map((items, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="single-property"
                            onClick={() =>
                              showInputFields(
                                index,
                                items.propertyInfo.subPropertyType
                              )
                            }
                          >
                            {items.propertyInfo.subPropertyType}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {a && (
                    <MainInfo
                      handleNextCard={handleNextCard}
                      subPropertyType={subPropertyType}
                      getPropertyDetails={getPropertyDetails}
                    />
                  )}
                </div>
              </div>
            </div>
            {b && (
              <BasicInfo
                handleNextCard={handleNextCard}
                subPropertyType={subPropertyType}
                getPropertyDetails={getPropertyDetails}
                image={setImage}
                formSubmit={formSubmit}
              />
            )}
            {c && (
              <ProInternalInfo
                handleNextCard={handleNextCard}
                subPropertyType={subPropertyType}
                getPropertyDetails={getPropertyDetails}
              />
            )}
            {d && (
              <OwnerInfo
                handleNextCard={handleNextCard}
                subPropertyType={subPropertyType}
                getPropertyDetails={getPropertyDetails}
              />
            )}
            {e && (
              <ProAddress
                handleNextCard={handleNextCard}
                subPropertyType={subPropertyType}
                getPropertyDetails={getPropertyDetails}
                formSubmit={formSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default PropertyCard;
