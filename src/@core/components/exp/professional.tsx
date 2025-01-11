import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

const ProfessionalExperience = () => {
  return (
    <Card sx={{ background: '#101010' }}>
      <CardHeader titleTypographyProps={{ color: '#e1def5e6' }} title='Professional Experience' />
      <CardContent>
        <Timeline position='left'>
          <TimelineItem position='left'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e !important' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                HR assistant @ Grecotel
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Apr 2024 - Dec 2024
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
                Operations Manager / Owner @ Easytransfers4U
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Apr 2023 - Mar 2024
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
                Digital Marketing @ Saridakis Real Estate
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Feb 2021 - Mar 2022
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
                HR assistant @ Saridakis Insurance Broker
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Mar 2019 - Feb 2021
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
                Volunteer @ 547 Airborne Infantry Battalion
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Mar 2022 - Mar 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ProfessionalExperience
