import * as React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { tokens } from "../../theme";
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

export default function AddCase() {
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
          Add Case
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
            <Box>
              <Grid></Grid>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
