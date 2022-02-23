import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import Container from '@mui/material/Container'
// import AppleIcon from '@mui/icons-material/Apple';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

export default function Create() {
  return (
    <Container>
    
      <Typography variant ="h6" color ="textSecondary" component = "h2" gutterBottom>
Create a New Note        
      </Typography>
      <Button onClick={()=>console.log('You clicked me!')}
              type ="submit" 
              color= "secondary" 
              variant = "contained"
              
              endIcon={<PresentToAllIcon/>}
              
              >Submit</Button> <br/>
              {/* icons */}
              {/* <AppleIcon />
              <AppleIcon color="primary" fontSize="large"/>
              <AppleIcon color="secondary" fontSize="large"/>
              <AppleIcon color="action" fontSize="large"/>
              <AppleIcon color="error" fontSize="large"/>
              <AppleIcon color="disabled" fontSize="large"/> */}
              
    </Container>
  ); 
}