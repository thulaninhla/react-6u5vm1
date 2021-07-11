import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Thulani Nhlapo</Typography>
            <Typography variant="h5">IT Graduate</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>About Me, Education, work experience</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}