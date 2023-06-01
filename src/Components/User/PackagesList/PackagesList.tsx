
import {Box,Container,Typography} from '@mui/material';
import RowPost from '../../User/RowPost/RowPost';
import {ListItems} from './ListItems'
import {PropertiesBox,PropertiesTextBox,} from './Style'





const PackagesList = () => {
 
    return (
    <Box sx={{mt:5,backgroundColor:'#F5FAFE',py:10}}>
        <Container>
            <PropertiesTextBox>
                <Typography sx={{color:'#000339',fontSize:'35px',fontWeight:'bold'}}>
                    Our Plans
                </Typography>
                <Typography sx={{color:'#5A6473',fontSize:'16px',fontWeight:'bold',mt:1}}>
                   Every packages you looking for is here.........!
                </Typography>
            </PropertiesTextBox>
            <PropertiesBox>
                {
                    ListItems.map((property)=>
                        (
                           <RowPost 
                               key={property.id} 
                               img={property.img}
                               name={property.name}
                               price={property.price}
                               cate={property.cate}
                                />
                        )
                    )
                }
            </PropertiesBox>
        </Container>

    </Box>
  )
}

export default PackagesList