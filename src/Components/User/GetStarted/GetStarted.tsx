import {Typography} from '@mui/material'
import {Box} from '@mui/system'
import { Customcontainer,CustomBox,CustomButton} from './Style'
import StartIcon from '../../../assets/images/Take Away-pana.png'

const GetStarted = () => {
  return (
   <CustomBox>
    <Customcontainer>
        <Box>
            <Typography sx={{fontSize:"35px",color:'white',fontWeight:'700'}}>Customization of Packages</Typography>
            <Typography sx={{fontSize:"16px",color:'#ccc',fontWeight:'500',my:3}}>Customise your daily food on your likes!</Typography>
            <CustomButton >Get Started Now</CustomButton>
        </Box>
        <img src={StartIcon} alt="startIcon" style={{width:'60%'}} />
    </Customcontainer>
   </CustomBox>
  )
}

export default GetStarted