
import { Button, Grid, TextField, Typography,ButtonGroup } from "@mui/material";
import React from "react";
import logo from "./assets/logo.png"
import Footer from "./Footer";

const LoginForm = () => {

  return (

    
    <Grid
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      
    
      
      <img src={logo}alt="logo"/>
      
      <Typography><h1>Login</h1></Typography>
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <ButtonGroup variant="text" aria-label="text button group">
        
        <Button>LOGIN</Button>
        
      </ButtonGroup>
      <h3>don’t have an account yet?</h3>
      <a href="/StudentSignUP">Create an Account</a>
      
      <Footer></Footer>
    </Grid>

    
  );
};

export default LoginForm;

