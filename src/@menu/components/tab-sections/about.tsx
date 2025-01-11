import { Card, CardContent, Typography } from '@mui/material'

import WhatIAmDoing from '../about-components/whatiamdoing'
import References from '../about-components/references'

const AboutSection = () => {
  return (
    <>
      <Card sx={{ backgroundColor: 'transparent' }}>
        <CardContent>
          <Typography variant='h5' className='mbe-2'>
            About Me
          </Typography>
          <Typography className='mbe-4' color='text.secondary'>
          I am a dynamic and results-driven professional specializing in Digital Marketing, with a solid foundation in Business Administration and a focus on Marketing. Leveraging my expertise in digital strategy, content creation, SEO, and social media marketing, I am passionate about crafting impactful campaigns that drive brand awareness, enhance customer engagement, and fuel business growth. My approach combines analytical insights with creative innovation to deliver measurable results and achieve organizational goals.
          </Typography>
         
          <WhatIAmDoing />
          <References />
        </CardContent>
      </Card>
    </>
  )
}

export default AboutSection
