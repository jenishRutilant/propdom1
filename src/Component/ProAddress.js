import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function ProAddress({ subPropertyType, getPropertyDetails, formSubmit }) {


  return (
    <>
      {/*------------------------------------- Commercial ------------------------------------- */}
      {
        (subPropertyType === "banquet halls" || subPropertyType === "plots" || subPropertyType === "shop" || subPropertyType === "retail" || subPropertyType === "office") &&
        <div className="col-lg-4 col-md-6 col-sm-12" id='address_info' style={{ display: "none" }}>
          <div className="card-body">
            <h3>Property Address</h3>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div className=" m-0 mt-3" style={{ width: "fit-content" }}>
                <select name='p_state' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select State</option>
                  <option value="gujrat">Gujrat</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="delhi">Delhi</option>
                  <option value="uttar pradesh">Uttar Pradesh</option>
                </select>
                <select name='p_district' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select District</option>
                  <option value="surat">Surat</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="north delhi">North Delhi</option>
                  <option value="ayodhya">Ayodhya</option>
                </select>
                <select name='p_city' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select City</option>
                  <option value="surat">Surat</option>
                  <option value="borivali">Borivali</option>
                  <option value="jamwa ramgarh">Jamwa Ramgarh</option>
                  <option value="karawal nagar">Karawal Nagar</option>
                  <option value="lucknow">Lucknow</option>
                </select>
              </div>
              <TextField name='p_landMark' onChange={getPropertyDetails} id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_area' onChange={getPropertyDetails} id="outlined-basic" label="Area" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_sector' onChange={getPropertyDetails} id="outlined-basic" label="Sector" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_flatNo' onChange={getPropertyDetails} id="outlined-basic" label="Flat No." variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_latitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_longitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_reMarkes' onChange={getPropertyDetails} id="outlined-basic" label="Remarks" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
            </Box>
            <Stack direction="row" spacing={2} marginTop={4}>
              <Button fullWidth variant="contained"
                endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} type='submit' onClick={formSubmit}>
                Submit
              </Button>
            </Stack>
          </div>
        </div>
      }

      {/*------------------------------------- Residentail ------------------------------------- */}
      {
        (subPropertyType === "flat/apartment" || subPropertyType === 'independent floor' || subPropertyType === 'villa' || subPropertyType === 'farmhouse' || subPropertyType === 'plot') &&
        <div className="col-lg-4 col-md-6 col-sm-12" id='address_info' style={{ display: "none" }}>
          <div className="card-body">
            <h3>Property Address</h3>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="m-0 mt-3" style={{ width: "fit-content" }}>
                <select name='p_state' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select State</option>
                  <option value="gujrat">Gujrat</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="delhi">Delhi</option>
                  <option value="uttar pradesh">Uttar Pradesh</option>
                </select>
                <select name='p_district' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select District</option>
                  <option value="surat">Surat</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="north delhi">North Delhi</option>
                  <option value="ayodhya">Ayodhya</option>
                </select>
                <select name='p_city' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select City</option>
                  <option value="surat">Surat</option>
                  <option value="borivali">Borivali</option>
                  <option value="jamwa ramgarh">Jamwa Ramgarh</option>
                  <option value="karawal nagar">Karawal Nagar</option>
                  <option value="lucknow">Lucknow</option>
                </select>
              </div>
              <div className='input-fields m-0'>
                <TextField className='m-0 me-1 fields' name='p_landMark' onChange={getPropertyDetails} id="outlined-basic" label="Landmark" variant="outlined" />
                <TextField className='m-0 ms-2 fields' name='p_area' onChange={getPropertyDetails} id="outlined-basic" label="Area" variant="outlined" />
                <TextField className='m-0 me-1 mt-2 fields' name='p_sector' onChange={getPropertyDetails} id="outlined-basic" label="Sector" variant="outlined" />
                <TextField className='m-0 ms-2 mt-2 fields' name='p_flatNo' onChange={getPropertyDetails} id="outlined-basic" label="Flat No." variant="outlined" />
                <TextField className='m-0 me-1 mt-2 fields' name='p_latitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" />
                <TextField className='m-0 ms-2 mt-2 fields' name='p_longitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" />
                <TextField className='m-0 me-1 mt-2 fields' name='p_reMarkes' onChange={getPropertyDetails} id="outlined-basic" label="Remarks" variant="outlined" />
              </div>
            </Box>
            <Stack direction="row" spacing={2} marginTop={5} className='submit-btn1'>
              <Button fullWidth variant="contained"
                endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} type='submit' onClick={formSubmit} >
                Submit
              </Button>
            </Stack>
          </div>
        </div>
      }

    </>
  )
}

export default ProAddress
