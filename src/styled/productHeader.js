import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  customSection: {
    marginTop: '3rem',
  },
  customTypography: {
    fontSize: '35px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.26,
    letterSpacing: '-0.7px',
  },
  containerFilters: {
    marginTop: '2.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  containerTabsFilter: {
    flexGrow: 1,
    display: 'flex',
  },
  formControl: {
    minWidth: 170,
  },
  selectControl: {
    display: 'block',
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: '800',
    color: '#373737',
    fontSize: '14px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.3,
    boxSizing: 'border-box',
    marginBottom: '1.2rem',
    width: '140px',
  },
  customOptionNone: {
    display: 'none',
  },
  selectOrder: {
    marginBottom: '1rem',
  },
}));
