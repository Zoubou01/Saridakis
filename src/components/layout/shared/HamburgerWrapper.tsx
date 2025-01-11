'use client'

import { useState } from 'react'

import { Button, Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

//Hamburger Menu
import Hamburger from 'hamburger-react'

import { useDispatch, useSelector } from 'react-redux'

import { setMenuState } from '@/store/menuSlice'

const HamburgerWrapper = () => {
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()
  const value = useSelector((state: any) => state.menu.menuState)

  const handleHamburger = (value: string) => {
    setOpen(!isOpen)
    dispatch(setMenuState(value))
  }

  return (
    <>
      <Dialog fullScreen aria-labelledby='full-screen-dialog-title' open={isOpen}>
        <DialogContent sx={{ background: 'black !important', height: '100%  ' }}>
          <List sx={{ textAlign: 'center', height: '100%' }} component='nav' aria-label='main mailbox'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={() => handleHamburger('portfolio')} sx={{ textAlign: 'center' }}>
                  <Button className='no-hover'>
                    <Typography
                      color='#e1def5e6'
                      className={value == 'portfolio' ? 'active text-auto' : 'not-active text-auto'}
                    >
                      PORTFOLIO
                    </Typography>
                  </Button>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={() => handleHamburger('resume')} sx={{ textAlign: 'center' }}>
                  <Typography
                    color='#e1def5e6'
                    className={value == 'resume' ? 'active text-auto' : 'not-active text-auto'}
                  >
                    RESUME
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={() => handleHamburger('about')} sx={{ textAlign: 'center' }}>
                  <Typography
                    color='#e1def5e6'
                    className={value == 'about' ? 'active text-auto' : 'not-active text-auto'}
                  >
                    ABOUT
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={() => handleHamburger('jobs')} sx={{ textAlign: 'center' }}>
                  <Typography
                    color='#e1def5e6'
                    className={value == 'jobs' ? 'active text-auto' : 'not-active text-auto'}
                  >
                    JOBS
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
      <div
        className='not-for-screen'
        style={{ padding: '1rem', paddingBottom: '0', display: 'flex', flexDirection: 'row', justifyContent: 'end' }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </>
  )
}

export default HamburgerWrapper
