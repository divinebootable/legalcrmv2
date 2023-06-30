import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { register } from "../../../features/authentication/authSlice";
import { clearMessage } from "../../../features/authentication/messageSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Kutora
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [successful, setSuccessfull] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialState = {
    account_name: "",
    email: "",
    law_firm: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    account_name: Yup.string()
      .test(
        "len",
        "The account_name must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required"),
    law_firm: Yup.string()
      .test(
        "len",
        "The law_name must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("This field is required"),
  });

  const handleSubmit = (formValue) => {
    const { account_name, email, law_firm, phone } = formValue;
    setSuccessfull(false);
    dispatch(register({ account_name, email, law_firm, phone }))
      .unwrap()
      .then(() => setSuccessfull(true))
      .catch(() => {
        setSuccessfull(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  {!successful && (
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            className={
                              "form-control" +
                              (errors.account_name && touched.account_name
                                ? "is-invalid"
                                : "")
                            }
                            autoComplete="given-name"
                            name="account_name"
                            required
                            fullWidth
                            id="AccountName"
                            label="Account Name"
                            autoFocus
                          />
                          <ErrorMessage
                            name="account_name"
                            component="grid"
                            className="invalid-feedback"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            className={
                              "form-control" +
                              (errors.law_firm && touched.law_firm
                                ? "is-invalid"
                                : "")
                            }
                            required
                            fullWidth
                            id="lawfirm"
                            label="Law Firm"
                            name="law_firm"
                            autoComplete="law firm"
                          />
                          <ErrorMessage
                            name="law_firm"
                            component="grid"
                            className="invalid-feedback"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                            autoComplete="email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="phone"
                            label="Phone number"
                            type="tel"
                            id="phonenumber"
                            autoComplete="phone number"
                            className={
                              "form-control" +
                              (errors.phone && touched.phone
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                              />
                            }
                            label="I want to receive inspiration, marketing promotions and updates via email."
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Started
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link href="/" variant="body2">
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
