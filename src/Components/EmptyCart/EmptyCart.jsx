import { Box, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import emptycart from '../../Assets/emptycart.mp4'

const useStyle = makeStyles((theme)=>{
    return {
        container:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            gap:'20px',
            padding:'50px',
            color:theme.palette.grey[500]
        }
    }
})

const EmptyCart = () => {
    const {container} = useStyle()
  return (
    <Box className={container}>
      <Box>
        <CardMedia src={emptycart} component={"video"} autoPlay={true} loop sx={{width:'100%'}} />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          No Item In Your Cart.
        </Typography>
      </Box>
    </Box>
  );
}

export default EmptyCart