import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  containerGrid: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
