'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography } from '@mui/material'

import { setMenuState } from '@/store/menuSlice'

const PhoneMenu = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: any) => state.menu.menuState)

  const handleChange = (value: string) => {
    dispatch(setMenuState(value))
  }

  return (
    <>
      <div className='phone-menu not-for-screen'>
        <Button className='phone-menu-btn' onClick={() => handleChange('about')}>
          <Typography variant='h5' className={value == 'about' ? 'active' : 'not-active'}>
            About
          </Typography>
        </Button>
        <Button className='phone-menu-btn' onClick={() => handleChange('resume')}>
          <Typography variant='h5' className={value == 'resume' ? 'active' : 'not-active'}>
            Resume
          </Typography>
        </Button>
        <Button className='phone-menu-btn' onClick={() => handleChange('portfolio')}>
          <Typography variant='h5' className={value == 'portfolio' ? 'active' : 'not-active'}>
            Portfolio
          </Typography>
        </Button>
        <Button className='phone-menu-btn' onClick={() => handleChange('jobs')}>
          <Typography variant='h5' className={value == 'jobs' ? 'active' : 'not-active'}>
            Jobs
          </Typography>
        </Button>
      </div>
    </>
  )
}

export default PhoneMenu
