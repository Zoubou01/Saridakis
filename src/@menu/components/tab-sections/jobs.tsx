import { Card, CardContent, Typography } from '@mui/material'

import JobsAccordion from '../jobs-components/accordion'

const JobsSection = () => {
  return (
    <>
      <Card sx={{ backgroundColor: 'transparent' }}>
        <CardContent>
          <Typography variant='h5' className='mbe-2'>
            Summary of my roles and contributions.
          </Typography>
          <JobsAccordion />
        </CardContent>
      </Card>
    </>
  )
}

export default JobsSection
