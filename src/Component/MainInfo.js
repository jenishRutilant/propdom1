import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function MainInfo({ handleNextCard, subPropertyType, getPropertyDetails }) {
  return (
    <>
      {/*------------------------------------- Commercial ------------------------------------- */}
      {(subPropertyType === "banquet halls" ||
        subPropertyType === "plots" ||
        subPropertyType === "shop" ||
        subPropertyType === "retail" ||
        subPropertyType === "office") && (
        <>
          <div className="d-flex gap-3 mt-4">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_furnitureType"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Select Type
              </option>
              <option value="furniture">Furniture</option>
              <option value="unfurniture">Unfurniture</option>
              <option value="semifurniture">Semifurniture</option>
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_isAuthorised"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Autorized
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="input-fields"
          >
            <TextField
              className="m-0 fields"
              id="outlined-basic"
              label="Measurment"
              variant="outlined"
              name="p_masurementUnit"
              onChange={getPropertyDetails}
            />
            <TextField
              className="m-0 ms-2 fields"
              id="outlined-basic"
              label="Total Size"
              variant="outlined"
              name="p_totalSize"
              onChange={getPropertyDetails}
            />
            <TextField
              className="m-0 mt-2 fields"
              id="outlined-basic"
              label="Use Area"
              variant="outlined"
              name="p_useArea"
              onChange={getPropertyDetails}
            />
            <TextField
              className="m-0 ms-2 fields"
              id="outlined-basic"
              label="Open Area"
              variant="outlined"
              name="p_openArea"
              onChange={getPropertyDetails}
            />
            <TextField
              className="m-0 mt-2 fields"
              id="outlined-basic"
              label="Cover Area"
              variant="outlined"
              name="p_coverArea"
              onChange={getPropertyDetails}
            />
          </Box>
          <div className="submit-btn mt-2" onClick={handleNextCard}>
            <i className="fa-solid fa-forward"></i>
          </div>
        </>
      )}

      {subPropertyType === "hotel" && (
        <>
          <div className="mt-4">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_isAuthorised"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Autorized
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Open Area"
              name="p_openArea"
              onChange={getPropertyDetails}
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Cover Area"
              name="p_coverArea"
              onChange={getPropertyDetails}
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
          </Box>
          <div className="submit-btn mt-4" onClick={handleNextCard}>
            <i className="fa-solid fa-forward"></i>
          </div>
        </>
      )}

      {subPropertyType === "factory" && (
        <>
          <div className="d-flex gap-3 mt-4">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_furnitureType"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Select Type
              </option>
              <option value="furniture">Furniture</option>
              <option value="unfurniture">Unfurniture</option>
              <option value="semifurniture">Semifurniture</option>
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_isAuthorised"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Autorized
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Open Area"
              name=""
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Cover Area"
              name=""
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
          </Box>
          <div className="submit-btn mt-4" onClick={handleNextCard}>
            <i className="fa-solid fa-forward"></i>
          </div>
        </>
      )}

      {/*------------------------------------- Residentail ------------------------------------- */}
      {subPropertyType === "flat/apartment" && (
        <>
          <div className="d-flex gap-3 mt-4">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_furnitureType"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Select Type
              </option>
              <option value="furniture">Furniture</option>
              <option value="unfurniture">Unfurniture</option>
              <option value="semifurniture">Semifurniture</option>
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_isAuthorised"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Autorized
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Measurment"
              variant="outlined"
              style={{ width: "100%", margin: "0" }}
              name="p_masurementUnit"
              onChange={getPropertyDetails}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Total Size"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              name="p_totalSize"
              onChange={getPropertyDetails}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Use Area"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              name="p_useArea"
              onChange={getPropertyDetails}
            />
          </Box>
          <div className="submit-btn mt-4" onClick={handleNextCard} disabled>
            <i className="fa-solid fa-forward"></i>
          </div>
        </>
      )}

      {(subPropertyType === "independent floor" ||
        subPropertyType === "villa" ||
        subPropertyType === "farmhouse" ||
        subPropertyType === "plot") && (
        <>
          <div className="d-flex gap-3 mt-4">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_furnitureType"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Select Type
              </option>
              <option value="furniture">Furniture</option>
              <option value="unfurniture">Unfurniture</option>
              <option value="semifurniture">Semifurniture</option>
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="p_isAuthorised"
              onChange={getPropertyDetails}
              style={{ width: "50%" }}
            >
              <option disabled selected>
                Autorized
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Measurment"
              variant="outlined"
              style={{ width: "100%", margin: "0" }}
              name="p_masurementUnit"
              onChange={getPropertyDetails}
            />
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Total Size"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              name="p_totalSize"
              onChange={getPropertyDetails}
            />
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Use Area"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              name="p_useArea"
              onChange={getPropertyDetails}
            />
            <TextField
              className="mt-2"
              id="outlined-basic"
              label="Open Area"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              name="p_openArea"
              onChange={getPropertyDetails}
            />
          </Box>
          <div className="submit-btn mt-4" onClick={handleNextCard}>
            <i className="fa-solid fa-forward"></i>
          </div>
        </>
      )}
    </>
  );
}

export default MainInfo;
