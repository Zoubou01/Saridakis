'use client'

import { Typography, Grid, Card, CardContent } from '@mui/material'

const WhatIAmDoing = () => {
  return (
    <>
      <Typography variant='h5' className='mbe-2'>
        What i am doing
      </Typography>
      <Grid container gap={5} sx={{ display: 'flex', justifyContent: 'center' }} marginBottom={'2rem'}>
        <Grid item xs={12} xl={6} lg={6} md={6}>
          <Card sx={{ background: '#171717' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/planning.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Strategy Development
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography className='ellipsis'>
                    Focused target, clear goals, actionable plan.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={5} lg={5} md={5}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/network.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                    Social Management
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Connected conversations, audience engagement, seamless communication.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={5} lg={5} md={5}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/statistics.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Data Analysis
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Insights revealed, performance measured, informed decisions. </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6} lg={6} md={6}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/analytics.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                    SEO/SEM Optimization
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Enhanced visibility, precise targeting, search dominance.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default WhatIAmDoing
