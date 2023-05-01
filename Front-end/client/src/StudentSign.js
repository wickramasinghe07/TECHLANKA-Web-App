import * as React from 'react';
import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';




export default function StudentSignUP() {
    return (

      
    
     
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
        </Fab>


      <Grid
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >

        <Typography>S T U D E N T</Typography>
        
        <TextField
          id="standard-helperText"
          label="First Name *"
          defaultValue=""
          helperText=""
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Last Name *"
          defaultValue=""
          helperText=""
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Email *"
          defaultValue=""
          helperText=""
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Phone Number *"
          defaultValue=""
          helperText=""
          variant="standard"
        />
         <TextField
          id="standard-password-input"
          label="Password *"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <TextField
          id="standard-password-input"
          label="Conform Password *"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <Button>
        Submit
      </Button>

      <Button>
       Clear
      </Button>
        {/* <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        /> */}
      </Grid>
      </Box>

      
    );
  }
