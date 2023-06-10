import * as React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { tokens } from "../../theme";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AddContact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
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
          Add Contact
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
            Add Contact
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
                        label="firstname"
                        id="outlined-size-small"
                        defaultValue="FirstName"
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
                        label="lastname"
                        id="outlined-size-small"
                        defaultValue="LastName"
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
                        label="email"
                        id="outlined-size-small"
                        defaultValue="Email"
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
                        label="profession"
                        id="outlined-size-small"
                        defaultValue="Profession"
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
                        label="Employer"
                        defaultValue="Employer"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid xs={2} sm={4} md={4}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-country-input"
                        label="Phone"
                        defaultValue="Phone"
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
                        label="address"
                        id="outlined-size-small"
                        defaultValue="Address"
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
                        label="id card Number"
                        id="outlined-size-small"
                        defaultValue="Id Card Number"
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
                        id="outlined-city-input"
                        label="city"
                        defaultValue="City"
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
                        label="country"
                        defaultValue="Country"
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
                        id="outlined-details-input"
                        label="other details"
                        defaultValue="Other Details"
                        size="medium"
                        type="textarea"
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
  );
}
