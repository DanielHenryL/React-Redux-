import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid
        className=""
        container
        spacing={ 0 }
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ minHeight:'100vh', backgroundColor:'primary.main', padding:4 }}
      >
        <Grid 
          item
          className='box-shadow'
          xs={3}
          sx={{ 
            width:{ md:350},
            backgroundColor:'white', 
            padding:4, 
            borderRadius:2}}
        >
          <Typography variant="h5" sx={{ mb:1,textAlign:'center'}}>{title}</Typography>
            {children}
        </Grid>
    </Grid>
  )
}
