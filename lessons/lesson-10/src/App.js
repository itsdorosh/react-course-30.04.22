import {useFormik} from "formik";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import './App.css';
import {Grid, Typography} from "@mui/material";
import {Login} from "@mui/icons-material";

let loginFormValidationSchema = yup.object().shape({
  email: yup.string().email("YO, THIS EMAIL NOT EVEN AN EMAIL").required("You need to fill this up!"),
  age: yup.number(),
  password: yup.string().min(5).required("You cannot go anywhere without password"),
});

function App() {
  const {values, handleSubmit, handleChange, handleBlur, errors} = useFormik({
    validationSchema: loginFormValidationSchema,

    initialValues: {
      email: '',
      password: '',
    },

    onSubmit(values, helpers) {
      console.log(values, helpers);
      helpers.resetForm();
    },
  });

  return (<div className="App">
      <Container maxWidth="sm" sx={{marginTop: 25}}>
        <Paper elevation={3}>
          <Box padding={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Login />
                  <Typography component={'p'} variant={'h4'}>Login Form</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    label={"Email"}
                    variant={"standard"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="password"
                    name="password"
                    label={"Password"}
                    variant={"standard"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.password}
                    helperText={errors.password}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">Login</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>);
}

export default App;
