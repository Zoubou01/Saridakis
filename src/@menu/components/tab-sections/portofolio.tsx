import { Card, Typography, Grid } from '@mui/material'

const PortfolioSection = () => {
  return (
    <>
      <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'}>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://travel-buddy-pearl.vercel.app/'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/avatars/airplane.png'
              />
              <Typography variant='h5'>Ai Travel Buddy</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                React, NextJS, Typescript, Ai
              </Typography>
            </Card>
          </a>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://console.loggia.gr/el/home'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/pms.png'
              />
              <Typography variant='h5'>Property Managment System (Maintained)</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                React, Next, PHP, Angular, Javascript, Typescript, Redux
              </Typography>
            </Card>
          </a>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://www.istorm.gr/?utm_campaign=Search_Brand_iStorm+%23Ongoing&gad_source=1&gclid=CjwKCAjw-JG5BhBZEiwAt7JR67oPivjFRCLducuF2ZPHMP9P4rief53uhFbh8SkWhtlLRyE72ZDiyBoCm5YQAvD_BwE'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/istorm.png'
              />
              <Typography variant='h5' marginBottom={0}>
                iStorm ecommerce website (Maintained)
              </Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                Magento, Javascript, PHP
              </Typography>
            </Card>
          </a>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://partners.isquare.gr/customer/account/login'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/isquare.png'
              />
              <Typography variant='h5'>iSquare ecommerce website (Maintained)</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                Magento, Javascript, PHP
              </Typography>
            </Card>
          </a>
        </Grid>

        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://calculator-iphone-theta.vercel.app/'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/avatars/calc.png'
              />
              <Typography variant='h5'>Ai iPhone Calculator Clone</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                NextJS, Typescript, Ai
              </Typography>
            </Card>
          </a>
        </Grid>

        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://card-game-blue-psi.vercel.app/'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/avatars/pokemon.jpg'
              />
              <Typography variant='h5'>Pokemon Memory Game</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                NextJS, Typescript, React
              </Typography>
            </Card>
          </a>
        </Grid>

        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://github.com/Zoubou01/dark-souls-next-app'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/movies1.jpg'
              />
              <Typography variant='h5'>Movie App</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                React, Typescript, NextJS, Redux
              </Typography>
            </Card>
          </a>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <a href='https://www.acscourier.net/'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <img
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '20px'
                }}
                src='/images/portfolio/acs.png'
              />
              <Typography variant='h5'>ACS Website + App (Maintained)</Typography>
              <Typography variant='subtitle1' className='mbe-2'>
                Java, Android Studio
              </Typography>
            </Card>
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioSection
