import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

const Education = () => {
  return (
    <Card sx={{ background: '#101010' }}>
      <CardHeader titleTypographyProps={{ color: '#e1def5e6' }} title='Education' />
      <CardContent>
        <Timeline position='left'>
          <TimelineItem position='left'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Bachelor of Business Administration & Management
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                Sep 2017 - Sept 2021
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position='right'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
              Google Fundamentals of Digital Marketing
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                Nov 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
              Digital Marketing Young Practitioners
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                Oct 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position='right'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
              C2 Proficiency Degree in English
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                May 2014
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
              B1 Intermediate Degree in German
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                Apr 2015
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default Education
