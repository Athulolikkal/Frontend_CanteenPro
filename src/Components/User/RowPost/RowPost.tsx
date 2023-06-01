import React from 'react'
import { Typography } from '@mui/material';
import { CardContainer, CardImage, TextHeader, } from './Style'

interface Props {
  key: string;
  img: string;
  name: string;
  price: number;
  cate: 'veg' | 'non-veg';
}
const RowPost: React.FC<Props> = ({ img, name, price, cate, key }) => {

  return (
    <CardContainer>
      <CardImage src={img} alt={name} />
      <TextHeader> {name}</TextHeader>
      <Typography variant="body2" align="center">
        Price: {price}
      </Typography>
      <Typography variant="body2" align="center">
        Category: {cate}
      </Typography>
    </CardContainer>
  )
}

export default RowPost