// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/@core/libs/styles/AppReactApexCharts'))

const SkillChart = () => {
  // Vars
  const divider = '#808390'
  const disabledText = '#808390'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: [divider],
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
        barHeight: '30%',
        horizontal: true
      }
    },
    grid: {
      borderColor: divider,
      xaxis: {
        lines: { show: false }
      },
      padding: {
        top: 0
      }
    },
    yaxis: {
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      categories: ['React', 'NextJS', 'AngularJS', 'Javascript', 'HTML', 'CSS', 'PHP', 'mySQL'],
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    }
  }

  return (
    <div style={{ padding: 5, paddingTop: 0 }}>
      <Card style={{ background: 'transparent' }}>
        <CardHeader
          titleTypographyProps={{ color: disabledText }}
          title='Skills'
          sx={{
            flexDirection: ['column', 'row'],
            alignItems: ['flex-start', 'center'],
            '& .MuiCardHeader-action': { mb: 0 },
            '& .MuiCardHeader-content': { mb: [2, 0] }
          }}
        />
        <CardContent>
          <AppReactApexCharts
            type='bar'
            width='100%'
            height={450}
            options={options}
            series={[{ data: [90, 90, 80, 70, 80, 70, 90, 70] }]}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillChart
