import { Typography, Box } from '@mui/material';
import { Customcontainer, CustomBox, CustomButton, TextBox, ContainerBox } from './style';
import BookOutlined from '@mui/icons-material/BookOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';


interface storeType{
  canteenInfo?:{
    canteenId?:''
    canteenName?:''
    email?:'',
    image?:''
  }
}




const CanteenHomeSideBar = () => {
const canteen=useSelector((state:storeType)=>state?.canteenInfo)
// const canteenId=canteen?.canteenId

  return (
    <CustomBox>
      <Customcontainer>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={canteen?.image?canteen?.image:'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.svg'}  alt="startIcon" style={{ width: '60%',borderRadius:'50%' }} />
          
          {/* <img src='https://project-video.s3.ap-south-1.amazonaws.com/94804ac0d9e804924a8ef033df48dba2' alt="startIcon" style={{ width: '40%' }} /> */}
        </Box>
        <ContainerBox>
          <TextBox>
            <Box sx={{ display: 'flex', alignItems: 'center',marginLeft:'1rem' }}>
              <BookOutlined sx={{ color: 'white', }} />
              <Typography sx={{ fontSize: "20px", color: 'black', fontWeight: '700', textAlign: 'center', }}>
                <span style={{ color: 'white' }}>Bookings:</span> 0
              </Typography>
            </Box>
        
            <Box sx={{ display: 'flex', alignItems: 'center',marginLeft:'1rem' }}>
              <PersonOutlined sx={{ color: 'white'}} />
              <Typography sx={{ fontSize: "20px", color: 'black', fontWeight: '700', textAlign: 'center' }}>
                <span style={{ color: 'white' }}>Customers:</span> 0
              </Typography>
            </Box>
          </TextBox>
          <Typography sx={{ fontSize: "30px", color: 'white', fontWeight: '700', textAlign: 'center' }}>{canteen?.canteenName}</Typography>
          <Typography sx={{ fontSize: "16px", color: '#ccc', fontWeight: '500', my: 2, textAlign: 'center' }}>{canteen?.email}</Typography>
          <CustomButton sx={{ marginBottom: 1 }}>Edit Profile</CustomButton>
        </ContainerBox>
      </Customcontainer>
    </CustomBox>
  );
};

export default CanteenHomeSideBar;
