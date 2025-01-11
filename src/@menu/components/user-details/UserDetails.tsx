import { Card, CardContent, Chip, Divider, Typography } from '@mui/material'

import CustomAvatar from '@/@core/components/mui/Avatar'

const UserDetails = () => {
  return (
    <Card
      sx={{
        position: 'sticky',
        top: '25px',
        background: '#101010',
        boxShadow: '0px 3px 20px 20px rgb(47 43 61 / 0.14)'
      }}
    >
      <CardContent className='flex flex-col pbs-12 gap-6'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <div
              className='flex flex-col items-center gap-4'
              style={{ backgroundColor: '#242323', borderRadius: '20px' }}
            >
              <CustomAvatar alt='user-profile' src='/images/avatars/Saridakis.png' variant='rounded' size={140} />
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='h4' color={'#e1def5e6'}>
                Kosmas Saridakis
              </Typography>
              <Chip label='Digital Marketing Specialist' sx={{ color: '#e1def5e6' }} size='medium' variant='tonal' />
            </div>
          </div>
          <div className='flex flex-col items-start flex-wrap gap-4'>
            <div className='flex flex-row items-center gap-4'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-checkbox' />
              </CustomAvatar>
              <div>
                <Typography variant='h5' color={'#e1def5e6'}>
                  6+ years
                </Typography>
                <Typography color={'#e1def5e6'}>Experience</Typography>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-briefcase' />
              </CustomAvatar>
              <div>
                <Typography variant='h5' color={'#e1def5e6'}>
                  Grecotel Marine Palace & Aqua Park
                </Typography>
                <Typography color={'#e1def5e6'}>HR Assistant</Typography>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Divider className='mlb-4' sx={{ color: '#e1def5e6' }} />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <a href='mailto: saridakisk2@gmail.com' style={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                  <i className='tabler-mail' />
                </CustomAvatar>
                <Typography className='font-medium' color='#e1def5e6' marginLeft={'0.4rem'}>
                  saridakisk2@gmail.com
                </Typography>
              </a>
            </div>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-map-pin' />
              </CustomAvatar>
              <Typography className='font-medium' color='#e1def5e6'>
                Barcelona, Spain
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div>
            {/*  */}
            {/* <div className='flex items-center flex-wrap gap-x-1.5'>
              <Typography className='font-medium' color='#e1def5e6'>
                LinkedIn:{' '}
                <a
                  style={{ color: '#1975d6' }}
                  target='_blank'
                  href='http://www.linkedin.com/in/giannis-zoumpoulakis-a1a780201'
                >
                  Giannis Zouboulakis
                </a>
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <Typography className='font-medium' color='#e1def5e6'>
                Country: EU Citizen
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                style={{ color: '#1975d6' }}
                target='_blank'
                href='https://www.linkedin.com/in/saridakisk/'
              >
                <img
                  src={'/images/icons/language-icons/linkedin.png'}
                  style={{ marginRight: '1rem', width: 35, height: 35, objectFit: 'contain' }}
                />
              </a>
              <a style={{ color: '#1975d6' }} target='_blank' href='https://github.com/Zoubou01'>
                <img
                  src={'/images/icons/language-icons/github_white.png'}
                  style={{ color: 'white', marginRight: '1rem', width: 35, height: 35, objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserDetails
