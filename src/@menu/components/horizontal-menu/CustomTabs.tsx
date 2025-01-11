'use client'

// React Imports
import type { SyntheticEvent, ReactElement } from 'react'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

import Grid from '@mui/material/Grid'

import { useDispatch, useSelector } from 'react-redux'

import CustomTabList from '@core/components/mui/TabList'

import { setMenuState } from '@/store/menuSlice'

const CustomTabs = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States

  const activeTabValue = useSelector((state: any) => state.menu.menuState)
  const dispatch = useDispatch()

  const handleChange = (event: SyntheticEvent, value: string) => {
    dispatch(setMenuState(value))
  }

  return (
    <>
      <TabContext value={activeTabValue}>
        <Grid container spacing={6}>
          <Grid item xs={12} justifyContent={'center'} display={'flex'}>
            <div className='not-for-phone'>
              <CustomTabList
                onChange={handleChange}
                variant='scrollable'
                pill='true'
                sx={{
                  backgroundColor: '#242323',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                <Tab
                  sx={{ '&.Mui-selected': { backgroundColor: 'transparent !important', color: '#9e2e2e !important' } }}
                  className='custom-tab'
                  icon={<i className='tabler-user' />}
                  value='about'
                  label='About'
                  iconPosition='start'
                />
                <Tab
                  sx={{ '&.Mui-selected': { backgroundColor: 'transparent !important', color: '#9e2e2e !important' } }}
                  className='custom-tab'
                  icon={<i className='tabler-file' />}
                  value='resume'
                  label='Resume'
                  iconPosition='start'
                />
                <Tab
                  sx={{ '&.Mui-selected': { backgroundColor: 'transparent !important', color: '#9e2e2e !important' } }}
                  className='custom-tab'
                  icon={<i className='tabler-folder' />}
                  value='portfolio'
                  label='Portfolio'
                  iconPosition='start'
                />
                <Tab
                  sx={{ '&.Mui-selected': { backgroundColor: 'transparent !important', color: '#9e2e2e !important' } }}
                  className='custom-tab'
                  icon={<i className='tabler-buildings' />}
                  value='jobs'
                  label='Jobs'
                  iconPosition='start'
                />
              </CustomTabList>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={activeTabValue} className='p-0'>
              {tabContentList[activeTabValue]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </>
  )
}

export default CustomTabs
