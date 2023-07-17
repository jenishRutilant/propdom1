import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function OwnerInfo({ handleNextCard, subPropertyType, getPropertyDetails }) {
  return (
    <>
      {/*------------------------------------- Commercial ------------------------------------- */}
      {
        (subPropertyType === "banquet halls" || subPropertyType === "plots" || subPropertyType === "shop" || subPropertyType === "retail" || subPropertyType === "office") &&
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card-body">
            <h3>Property Owner Information</h3>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField name='p_ownerName' onChange={getPropertyDetails} id="outlined-basic" label="Owner Name" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerDetails' onChange={getPropertyDetails} id="outlined-basic" label="Owner Details" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerContact1' onChange={getPropertyDetails} id="outlined-basic" label="Owner Contact1" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerContact2' onChange={getPropertyDetails} id="outlined-basic" label="Owner Contact2" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <div className="m-0 mt-3" style={{ width: "fit-content" }}>
                <select name='p_ownerStatus' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Owner Status</option>
                  <option value="yes">Living</option>
                  <option value="no">Died</option>
                </select>
                <select name='p_nationality' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Nationality</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
              </div>
            </Box>
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      }
      {/*------------------------------------- Residentail ------------------------------------- */}
      {
        (subPropertyType === "flat/apartment" || subPropertyType === 'independent floor' || subPropertyType === 'villa' || subPropertyType === 'farmhouse' || subPropertyType === 'plot') &&
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card-body">
            <h3>Property Owner Information</h3>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField name='p_ownerName' onChange={getPropertyDetails} id="outlined-basic" label="Owner Name" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerDetails' onChange={getPropertyDetails} id="outlined-basic" label="Owner Details" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerContact1' onChange={getPropertyDetails} id="outlined-basic" label="Owner Contact1" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_ownerContact2' onChange={getPropertyDetails} id="outlined-basic" label="Owner Contact2" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <div className="m-0 mt-3 select-option">
                <select name='p_ownerStatus' onChange={getPropertyDetails} className="form-select form-select-lg" aria-label=".form-select-lg example">
                  <option disabled selected>Owner Status</option>
                  <option value="yes">Living</option>
                  <option value="no">Died</option>
                </select>
                <select name='p_nationality' onChange={getPropertyDetails} className="form-select form-select-lg" aria-label=".form-select-lg example">
                  <option disabled selected>Nationality</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
              </div>
            </Box>
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default OwnerInfo