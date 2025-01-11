'use client'

import React from 'react'

import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Typography, Tab, Card, CardContent } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'

import PhoneDotsMenu from './phone-dots'
import { setDotsState } from '@/store/dotsSlice'

const References = () => {
  const dispatch = useDispatch()
  const active = useSelector((state: any) => state.dots.dotsState)

  // @ts-ignore
  const handleChange = (newValue: string) => {
    dispatch(setDotsState(newValue))
  }

  return (
    <>
      <Typography
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        variant='h5'
        className='mbe-2'
      >
        References
        <div className='not-for-screen'>
          <PhoneDotsMenu />
        </div>
      </Typography>
      <TabContext value={active}>
        <div className='flex'>
          <div className='not-for-phone'>
            <TabList
              orientation='vertical'
              aria-label='vertical tabs example'
              TabIndicatorProps={{ style: { backgroundColor: '#9e2e2e' } }}
            >
              <Tab className='custom-tab' onClick={() => handleChange('3')} value='3' label='Saridakis Real Estate' />
              <Tab className='custom-tab' onClick={() => handleChange('2')} value='2' label='Grecotel Marine Palace & Aqua Park' />
              {/* <Tab className='custom-tab' onClick={() => handleChange('1')} value='1' label='8essentially' /> */}
            </TabList>
          </div>
          {/* <TabPanel value='1'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Maria Frantzeskaki</Typography>
                <Typography variant='h5'>Ceo & Founder 8essentially</Typography>
                <Typography variant='body1'>
                  To Whom It May Concern, I highly recommend Giannis Zouboulakis, who worked as a Fullstack Developer at
                  8essentially under my supervision from September 2022 to December 2022. During this time, Giannis
                  consistently demonstrated exceptional technical skills, leadership qualities, and a strong commitment
                  to delivering high-quality work. As a Fullstack Developer, Giannis was responsible for overseeing the
                  design, development, and optimization of complex web applications. As a team leader, he led a team of
                  developers in implementing responsive, user-friendly interfaces using cutting-edge technologies such
                  as HTML5, CSS3, JavaScript (ES6+), React, and various other frontend frameworks. Giannis showed
                  excellent problem-solving abilities, often finding innovative solutions to complex challenges. His
                  attention to detail and focus on performance optimization greatly improved the user experience of our
                  applications. Beyond his technical proficiency, Giannis was a natural leader, effectively mentoring
                  junior developers and fostering a collaborative team environment. One of Giannis&apos;s key
                  achievements was developing our personal website. This project not only enhanced our product offering
                  but also helped us meet critical deadlines and exceed client expectations. Giannis is a dedicated
                  professional who is always eager to learn and adapt to new technologies. He works well under pressure
                  and consistently meet deadlines, making him an asset to any development team. I have no doubt that
                  Giannis will continue to excel in his career and would be a great addition to any organization.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Maria Frantzeskaki.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel> */}
          <TabPanel value='3'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Eva Spanoudaki</Typography>
                <Typography variant='h5'>Co-Founder of Saridakis Real Estate</Typography>
                <Typography variant='body1'>
                To Whom It May Concern, I am writing to recommend Kosmas Saridakis, who worked as a Digital Marketing Specialist at Saridakis Real Estate. During their time with us, Kosmas Saridakis demonstrated exceptional skills, professionalism, and dedication, contributing significantly to our marketing efforts and overall business growth.

Kosmas Saridakis was instrumental in transforming our digital marketing landscape. They successfully implemented innovative strategies and campaigns that enhanced our online presence, strengthened brand awareness, and improved lead generation. Key highlights of their contributions include:

Driving measurable results: Through a combination of SEO, social media, and email marketing, Kosmas Saridakis helped increase website traffic by 40% and improved lead conversions, directly impacting our bottom line.
Content excellence: They developed engaging, high-quality content tailored to our audience, which increased engagement across platforms such as Instagram, Facebook, and LinkedIn by 35%.
Data-driven decision-making: By leveraging tools like Google Analytics and HubSpot, Kosmas Saridakis analyzed campaign performance and made informed adjustments to optimize results.
Beyond their technical expertise, Kosmas Saridakis brought exceptional creativity, adaptability, and a collaborative spirit to the team. They worked seamlessly across departments, ensuring that our marketing initiatives aligned with sales goals and enhanced client satisfaction.

Their ability to balance strategic vision with attention to detail sets them apart as a professional. Kosmas Saridakis consistently demonstrated a strong work ethic, a proactive approach, and a genuine passion for achieving outstanding results.

I have no doubt that Kosmas Saridakis will continue to excel in any endeavor they pursue. They would be a valuable asset to any organization, and I wholeheartedly recommend them for any position they seek.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Eva Spanoudaki.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value='2'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Stratidakis Manolis</Typography>
                <Typography variant='h5'>Ceo & Founder of Grecotel</Typography>
                <Typography variant='body1'>
                I am pleased to write this letter of recommendation for Kosmas Saridakis, who worked as a HR Assistant at Grecotel from 04/2024 to 12/2024. During this period, Kosmas Saridakis demonstrated outstanding professionalism, exceptional guest service, and a strong work ethic that contributed significantly to the success of our hotel.

As a HR Assistant, Kosmas Saridakis was responsible for managing guest check-ins and check-outs, handling reservations, answering inquiries, and ensuring that each guest had a memorable stay. He consistently exceeded expectations in all these areas, handling even the most complex situations with ease and grace. Kosmas Saridakis was always proactive, anticipating guest needs and ensuring that any issues were resolved quickly and efficiently.

Kosmas Saridakis has a keen attention to detail, a warm and approachable demeanor, and the ability to handle stressful situations calmly. He worked collaboratively with other departments to ensure the smooth operation of the hotel, often going above and beyond to make guests feel welcome and valued. His dedication to delivering an exceptional guest experience was evident in the positive feedback we received from guests on a regular basis.

In addition to his technical skills, Kosmas Saridakis displayed excellent communication and problem-solving abilities, which are essential in a front-line position. He also showed a strong sense of responsibility and leadership, often taking initiative in assisting colleagues and ensuring the HR department ran efficiently during peak periods.

I have no doubt that Kosmas Saridakis will bring the same level of professionalism, dedication, and positive attitude to any future role. I wholeheartedly recommend him for any opportunity and am confident that He will be an asset to any organization.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Stratidakis Manolis.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
        </div>
      </TabContext>
    </>
  )
}

export default References
