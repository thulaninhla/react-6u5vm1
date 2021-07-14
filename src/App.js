import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import BookSharpIcon from '@material-ui/icons/BookSharp';
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { AppBar, Toolbar, CssBaseline, CardMedia } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import image from 'react-native';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
 
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  container: {
    backgroundColor: theme.palette.backgroundColor
  }, 
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const myName = "Thulani Nhlapo "
  const myDesc = "IT Graduate"
  const myPhone = "0724389800"
  const myLinked = "www.linkedin.com/in/thulani-nhlapo-80783396"
  const myEmail = "thulaninhlapo2@gmail.com"
  const myLoca = "6205 Section R Mamelodi"

  return (
    <div className={classes.root}>
      
      <AppBar position="Static">
        <Toolbar>
      <Typography variant="h5" color="secondary" align="center" >{myName}</Typography>
      </Toolbar>
      </AppBar>
      
      <Grid container spacing={}>
        <Grid item xs={12} >
          <Paper className={classes.paper} elevation="0">
            
      <Typography variant="h5" color="secondary">{myDesc}</Typography>
          </Paper>
        </Grid>
      
        <Grid item xs={6}>
      
          <Paper className={classes.paper} elevation="0">
            <Typography variant="h6" color="secondary"    align="left">Contact</Typography>
            
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
             <PhoneIcon fontSize="large" style={{
               width: ''
             }}/>
             <span style={{
               width: ''
             }}>{myPhone}</span>
             </div>

            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
             <EmailIcon fontSize="large"/>
             <span>{myEmail}</span>
             </div>
            
             <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
             <LinkedInIcon fontSize="large"/>
             <span>{myLinked}</span>
             </div>

             <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
             <LocationOnIcon fontSize="large"/>
             <span>{myLoca}</span>
             </div>

            <Typography variant="h6" color="secondary" align="left">Skill</Typography>
            
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
            <FiberManualRecordIcon /><span>Html & CSS</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
            <FiberManualRecordIcon /><span>PHP</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
            <FiberManualRecordIcon /><span>MySQL</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
            <FiberManualRecordIcon /><span>Microsoft Office 365</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
            <FiberManualRecordIcon /><span>Visual Basic</span>
            </div>

            <Typography variant="h6" color="secondary" align="left">Reference</Typography>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Mrs. Dipuo Sebidi</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Designation: Manager</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Company Name: EPWP</b></span>
              </div><br />
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Mrs. Nancy Munyangane</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Designation: Supervior</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Company Name: South African Statistics</b></span>
              </div>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation="0">
            <Typography variant="h6" color="secondary">Profile</Typography>
            <Typography variant="h8" align="center" paragraph>
            
            </Typography>

            <Typography variant="h6" color="primary">Work experience</Typography>
            <Typography variant="body1" align="">01 August 2018 – 31 August 2019 Company : Expanded Public Works Programme
            Position Held : General Worker
            Duties : Cleaning & Culinary work</Typography>
            <Typography variant="body1" align="">05 April 2016 – 10 November 2016 Company : South African Statistics
            Position Held : Field Worker
            Duties : Community Surveying</Typography>

            <Typography variant="h6" color="primary">Education</Typography>
            <Typography variant="body1" align="">2021: Diploma in Information Technology </Typography>
            <Typography variant="body1" align="">2008: Grade 12 </Typography>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation="0">
            <Button variant="contained" color="primary" size="large"
             startIcon={<SaveIcon />}>
              Save</Button>
           
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
} 

