import { Card, Typography, Grid } from '@mui/material'

const PortfolioSection = () => {
  return (
    <>
      <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'}>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://saridakisins.gr/?fbclid=IwZXh0bgNhZW0CMTAAAR2SfP4ssiotgK_cnqnR89feoj7wAkqhSWXEBA2cgpRIkvFXYpvDy28jMlI_aem_4zxfIBFa5bQ7PyPwWkr7Jw'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/sarA.jpg'
              />
              <Typography variant='h5'>Saridakis Insurance</Typography>
              
            </Card>
          </a>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://www.saridakisrealestate.gr/?fbclid=IwZXh0bgNhZW0CMTAAAR08aaFG5rXUtJ7QCsGXBzCfZ4JSMYTVLYmvgF5EMFTy3jn4sRoxI0Q0Dl0_aem_7W-6s6wRKyQy6vzbTM2hRQ'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/sarB.jpg'
              />
              <Typography variant='h5'>Saridakis Real Estate</Typography>
              
            </Card>
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioSection
