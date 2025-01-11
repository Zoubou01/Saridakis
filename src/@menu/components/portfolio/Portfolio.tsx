import { Card, Grid } from '@mui/material'

import UserDetails from '../user-details/UserDetails'
import CustomTabs from '../horizontal-menu/CustomTabs'
import Resume from '../tab-sections/resume'
import AboutSection from '../tab-sections/about'
import PortfolioSection from '../tab-sections/portofolio'
import JobsSection from '../tab-sections/jobs'

const Portfolio = () => {
  const tabContentList = {
    resume: <Resume />,
    about: <AboutSection />,
    portfolio: <PortfolioSection />,
    jobs: <JobsSection />
  }

  return (
    <>
      <Grid container justifyContent={'start'} gap={2}>
        <Grid item xs={12} xl={3} lg={3} md={12} sm={12}>
          <UserDetails />
        </Grid>
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
          <Card sx={{ backgroundColor: '#101010' }}>
            <CustomTabs tabContentList={tabContentList}></CustomTabs>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent={'start'}>
        <Grid item xs={12} xl={6} lg={5} md={6} sm={10}></Grid>
        <Grid item xs={12} xl={6} lg={5} md={6} sm={10}>
          <SkillChart />
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardHeader titleTypographyProps={{ color: '#808390' }} title='Skills' />
            <CardContent>
              {programmingLanguages.map(lang => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '&:not(:last-of-type)': { mb: 4 }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={lang.img} style={{ marginRight: '1rem', width: 35, height: 35, objectFit: 'contain' }} />
                    <div>
                      <Typography color='secondary' sx={{ fontWeight: 500 }}>
                        {lang.languageTitle}
                      </Typography>
                      <Typography color='secondary' variant='body2'>
                        {lang.exp}
                      </Typography>
                    </div>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </>
  )
}

export default Portfolio
