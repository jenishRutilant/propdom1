import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function BasicInfo({
  handleNextCard,
  subPropertyType,
  getPropertyDetails,
  image,
  formSubmit,
}) {
  return (
    <>
      {/*------------------------------------- Commercial ------------------------------------- */}
      {(subPropertyType === "banquet halls" || subPropertyType === "plots") && (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          id="basic_info"
          style={{ display: "none" }}
        >
          <div className="card-body">
            <h3 className="mb-4">Property Basic Information</h3>
            <span>Ownershp Since</span>
            <TextField
              name="p_ownerShipSinces"
              type="date"
              onChange={getPropertyDetails}
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", margin: "0", marginTop: "10px" }}
            />
            <span>Available Date</span>
            <TextField
              name="p_availableDate"
              type="date"
              onChange={getPropertyDetails}
              className="mt-2"
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <form action="" method="post" encType="multipart/form-data">
              <TextField
                name="image"
                onChange={(i) => image(i.target.files[0])}
                className="mt-2"
                id="outlined-basic"
                type="file"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
            </form>
            <TextField
              name="p_treeCount"
              onChange={getPropertyDetails}
              className="mt-2"
              id="outlined-basic"
              label="Tree Count"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <TextField
              name="p_purchasedFrom"
              onChange={getPropertyDetails}
              className="mt-2"
              id="outlined-basic"
              label="Purchased From"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      )}

      {(subPropertyType === "shop" ||
        subPropertyType === "retail" ||
        subPropertyType === "office") && (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          id="basic_info"
          style={{ display: "none" }}
        >
          <div className="card-body">
            <h3 className="mb-4">Property Basic Information</h3>
            <span>Ownershp Since</span>
            <TextField
              id="outlined-basic"
              type="date"
              name="p_ownerShipSinces"
              onChange={getPropertyDetails}
              variant="outlined"
              style={{ width: "100%", margin: "0", marginTop: "10px" }}
            />
            <span>Available Date</span>
            <TextField
              className="mt-2"
              id="outlined-basic"
              name="p_availableDate"
              onChange={getPropertyDetails}
              type="date"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <form action="" method="post" encType="multipart/form-data">
              <TextField
                className="mt-2"
                id="outlined-basic"
                type="file"
                name="image"
                onChange={(i) => image(i.target.files[0])}
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
            </form>
            <TextField
              className="mt-2"
              id="outlined-basic"
              name="p_purchasedFrom"
              onChange={getPropertyDetails}
              label="Purchased From"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
            />
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      )}

      {(subPropertyType === "hotel" || subPropertyType === "factory") && (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          id="basic_info"
          style={{ display: "none" }}
        >
          <div className="card-body">
            <h3 className="mb-4">Property Basic Information</h3>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="date"
                name="p_ownerShipSinces"
                onChange={getPropertyDetails}
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%", margin: "0", marginTop: "10px" }}
              />
              <TextField
                name="p_treeCount"
                onChange={getPropertyDetails}
                className="mt-2"
                id="outlined-basic"
                label="Tree Count"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
              <TextField
                name="p_purchasedFrom"
                onChange={getPropertyDetails}
                className="mt-2"
                id="outlined-basic"
                label="Purchased From"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
            </Box>
            <Stack direction="row" spacing={2} marginTop={4}>
              <Button
                fullWidth
                variant="contained"
                endIcon={<SendIcon />}
                style={{
                  padding: "15px 0",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                onClick={formSubmit}
              >
                Submit
              </Button>
            </Stack>
          </div>
        </div>
      )}

      {/*------------------------------------- Residentail ------------------------------------- */}
      {subPropertyType === "flat/apartment" && (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          id="basic_info"
          style={{ display: "none" }}
        >
          <div className="card-body">
            <h3 className="mb-4">Property Basic Information</h3>
            <span style={{ fontSize: "20px" }}>Ownershp Since</span>
            <TextField
              name="p_ownerShipSinces"
              type="date"
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", margin: "0", marginTop: "10px" }}
              onChange={getPropertyDetails}
            />
            <span style={{ fontSize: "20px" }}>Available Date</span>
            <TextField
              name="p_availableDate"
              className="mt-2"
              id="outlined-basic"
              type="date"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              onChange={getPropertyDetails}
            />

            <form method="post" encType="multipart/form-data">
              <TextField
                className="mt-2"
                id="outlined-basic"
                type="file"
                name="image"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
                onChange={(i) => image(i.target.files[0])}
              />
            </form>

            <TextField
              name="p_purchasedFrom"
              className="mt-2"
              id="outlined-basic"
              label="Purchased From"
              variant="outlined"
              style={{ width: "100%", margin: 0 }}
              onChange={getPropertyDetails}
            />
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      )}

      {(subPropertyType === "independent floor" ||
        subPropertyType === "villa" ||
        subPropertyType === "farmhouse") && (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          id="basic_info"
          style={{ display: "none" }}
        >
          <div className="card-body">
            <h3 className="mb-4">Property Basic Information</h3>
            <form action="" method="post" encType="multipart/form-data">
              <span style={{ fontSize: "20px" }}>Ownershp Since</span>
              <TextField
                name="p_ownerShipSinces"
                type="date"
                onChange={getPropertyDetails}
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%", margin: "0", marginTop: "10px" }}
              />
              <span style={{ fontSize: "20px" }}>Available Date</span>
              <TextField
                name="p_availableDate"
                onChange={getPropertyDetails}
                className="mt-2"
                id="outlined-basic"
                type="date"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
              <form action="" method="post" encType="multipart/form-data">
                <TextField
                  type="file"
                  name="image"
                  onChange={(i) => image(i.target.files[0])}
                  className="mt-2"
                  id="outlined-basic"
                  variant="outlined"
                  style={{ width: "100%", margin: 0 }}
                />
              </form>
              <TextField
                name="p_treeCount"
                onChange={getPropertyDetails}
                className="mt-2"
                id="outlined-basic"
                label="Tree Count"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
              <TextField
                name="p_purchasedFrom"
                onChange={getPropertyDetails}
                className="mt-2"
                id="outlined-basic"
                label="Purchased From"
                variant="outlined"
                style={{ width: "100%", margin: 0 }}
              />
            </form>
            <div className="submit-btn mt-4" onClick={handleNextCard}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BasicInfo;
