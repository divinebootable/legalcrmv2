import * as React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { tokens } from "../../theme";
import TextField from "@mui/material/TextField";

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
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AddUser() {
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
          Add User
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                      />
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
