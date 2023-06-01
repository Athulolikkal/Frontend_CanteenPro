import React from 'react'
import {Box, Typography,Grid} from '@mui/material'
import {Customcontainer,CustomButton,BookingButton,CustomBox,ButtonContainer,TextContainer,CustomBoxText} from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const OnWish = () => {
  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Customcontainer>
      <TextContainer>
      <CustomBox>
          <img
            src='https://c.ndtvimg.com/2020-06/md20qlqo_curry_625x300_20_June_20.jpg'
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '100px',
              border: '1px solid white',
              display: 'block',
            }}
          />
       
       </CustomBox>
       
          <CustomBoxText>
         
          <Typography variant='h6' sx={{ fontWeight: '800',fontSize:'25px' }}>
          <CurrencyRupeeIcon fontSize='small' />  3000
            </Typography>
         
           
             
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 1,color:'#A0A7AB ', }}>
             seens mess house
            </Typography>
            </CustomBoxText>
        </TextContainer>

      
          <CustomButton sx={{ }}>Remove</CustomButton>
          <BookingButton sx={{ }}>BookNow</BookingButton>
       
      </Customcontainer>
    </Box>
  );
};



export default OnWish