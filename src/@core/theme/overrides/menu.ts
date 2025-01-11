// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const menu = (skin: Skin): Theme['components'] => ({
  MuiMenu: {
    defaultProps: {
      ...(skin === 'bordered' && {
        slotProps: {
          paper: {
            elevation: 0
          }
        }
      })
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        marginBlockStart: theme.spacing(0.5),
        ...(skin !== 'bordered' && {
          boxShadow: 'var(--mui-customShadows-lg)'
        })
      })
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingBlock: theme.spacing(2),
        gap: theme.spacing(2),
        color: 'var(--mui-palette-text-primary)',
        marginInline: theme.spacing(2),
        borderRadius: 'var(--mui-shape-borderRadius)',
        '& i, & svg': {
          fontSize: '1.375rem'
        },
        '& .MuiListItemIcon-root': {
          minInlineSize: 0
        },
        '&:not(:last-of-type)': {
          marginBlockEnd: theme.spacing(0.5)
        },
        '&.Mui-selected': {
          background: 'linear-gradient(270deg, rgb(103 170 240 / 72%) 0%, #000000 100%) !important',
          color: 'white',
          '& .MuiListItemIcon-root': {
            color: 'rgb(103 170 240 )'
          },
          '&:hover, &.Mui-focused, &.Mui-focusVisible': {
            backgroundColor: 'rgb(103 170 240 / 32%)'
          }
        },
        '&.Mui-disabled': {
          color: 'var(--mui-palette-text-disabled)',
          opacity: 0.45
        }
      })
    }
  }
})

export default menu
