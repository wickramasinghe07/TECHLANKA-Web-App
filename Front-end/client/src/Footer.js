import React from "react"
import "./FooterStyle.css"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";


const Footer = () => {
  return (

    <Stack direction="row" spacing={1}>
      <IconButton aria-label="instagramIcon">
        <InstagramIcon />
      </IconButton>

      
      <IconButton aria-label="twitterIconn">
        <TwitterIcon />
      </IconButton>

      <IconButton aria-label="facebookIcon">
        <FacebookIcon />
      </IconButton>


    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>T E C H  L A N K A</h1>
            
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
    </Stack>
  )
}

export default Footer
