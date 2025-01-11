// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// @ts-ignore
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// @ts-ignore
import { useDispatch } from 'react-redux'

import { setDotsState } from '@/store/dotsSlice'

const ITEM_HEIGHT = 48

const PhoneDotsMenu = () => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const dispatch = useDispatch()

  const handleClose = (value: string) => {
    dispatch(setDotsState(value))
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
        <i className='tabler-dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        id='long-menu'
        anchorEl={anchorEl}
        onClose={() => handleClose('1')}
        open={Boolean(anchorEl)}
        slotProps={{ paper: { style: { backgroundColor: '#242323', maxHeight: ITEM_HEIGHT * 4.5 } } }}
      >
        <MenuItem onClick={() => handleClose('3')}>Saridakis</MenuItem>
        <MenuItem onClick={() => handleClose('2')}>Grecotel</MenuItem>
        {/* <MenuItem onClick={() => handleClose('1')}>8essentially</MenuItem> */}
      </Menu>
    </>
  )
}

export default PhoneDotsMenu
