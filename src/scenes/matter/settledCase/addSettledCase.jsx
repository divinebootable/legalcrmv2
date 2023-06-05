import * as React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { tokens } from "../../../theme";
import TextField from "@mui/material/TextField";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  flexGrow: 1,
};

export default function AddSettledCase() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
       <div>
      <Box
        width="30%"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor={colors.greenAccent[600]}
        borderRadius="4px"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleOpen}
      >
        <Typography variant="h5" color={colors.greenAccent[400]}>
          Add Settlements
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add Settlements
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Reference Number"
                        id="outlined-size-small"
                        defaultValue="FirstName"
                        name="case_ref_number"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Category"
                        id="outlined-size-small"
                        defaultValue="Category"
                        name="category"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Case Description"
                        id="casedescription"
                        defaultValue="Case Description"
                        name="case_description"
                        size="large"
                        type="textArea"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="client"
                        id="outlined-size-small"
                        defaultValue="Client"
                        name="client"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Expert"
                        id="outlined-size-small"
                        defaultValue="Expert"
                        name="expert"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-country-input"
                        label="Location"
                        defaultValue="Location"
                        name="location"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch", pt:4 } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-size-small"
                        label="Case Name"
                        defaultValue="Case Name"
                        name="case_name"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Case Fee"
                        id="outlined-size-small"
                        defaultValue="Case Fee"
                        name="case_fee"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Against"
                        id="outlined-size-small"
                        defaultValue="Against"
                        name="non_client"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="date"
                        label="Open Date"
                        name="open_date"
                        type="text"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="AjournedDate"
                        label="Ajourned Date"
                        defaultValue="Ajourned date"
                        name="ajourned_date"
                        size="small"
                        type="text"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="ClosedDate"
                        label="Closed Date"
                        defaultValue="Closed date"
                        name="close_date"
                        size="small"
                        type="text"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="Status"
                        label="Status"
                        defaultValue="status"
                        name="status"
                        size="small"
                        type="select"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="Observation"
                        label="Observations"
                        defaultValue="Observations"
                        name="case_description"
                        size="medium"
                        type="textArea"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="remarks"
                        label="Remarks"
                        defaultValue="Remarks"
                        name="remark"
                        size="medium"
                        type="textArea"
                      />
                    </div>
                  </Box>
                </Grid>
              </Grid>
              <Button variant="contained" endIcon={<SaveAltIcon />}>
                Save
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
   </div>
  );
}
