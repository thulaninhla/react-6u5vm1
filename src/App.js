import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { AppBar, Toolbar } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
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
      
      <AppBar style={{backgroundColor:"#37474f"}} position="Static">
        <Toolbar>
      <Typography variant="h5" color="#37474f" style={{textAlign:"center", marginLeft:'500px', color:"#ffd740"}}><h3>Thulani <b>Nhlapo</b> </h3><p>IT Graduate</p></Typography>
      </Toolbar>
      </AppBar>
      
      <Grid container spacing={}>
       
      
        <Grid item xs={5}>
      
          <Paper style={{}} className={classes.paper} elevation="0">
            <Typography style={{ color:"#ffd740"}}variant="h6" color="secondary"    align="left">Contact</Typography>
            <br />
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
              borderBottom:"solid", borderColor:"#ffd740 ", borderWidth:'2px' 
            }}>
             <LocationOnIcon fontSize="large"/>
             <span>{myLoca}</span>
             </div>
              <br />
            <Typography style={{ color:"#ffd740"}} variant="h6"  align="left">Skills</Typography>
            <br />
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
              borderBottom:"solid", borderColor:"#ffd740", borderWidth:'2px' 
            }}>
            <FiberManualRecordIcon /><span>Visual Basic</span>
            </div>
            <br />
            <Typography style={{ color:"#ffd740"}} variant="h6" color="secondary" align="left">Reference</Typography><br />
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
              borderBottom:"solid", borderColor:"#ffd740 ", borderWidth:'2px' 
            }}>
              <span><b>Company Name: South African Statistics</b></span>
              </div>

          </Paper>
        </Grid>
        <Grid  style={{ borderLeft:"solid", borderColor:" #ffd740 ", borderWidth:'4px', marginTop:'15px'  }} item xs={6}>
          <Paper className={classes.paper} elevation="0">
            <Typography style={{  color:"#ffd740"}} variant="h6" color="secondary" align="left">Profile</Typography><br />
            <Typography variant="h8" align="left" paragraph>
            I believe I am the right candidate for this poertunity as i have the skill set to meet the company's objective in terms of the development of back-end and front-end of web-based, desktop and mobile applications in PHP, Visual Basic. Html, CSS, JAVA, and the set of database managment system. By joining the team, i will be able to learn new skills in the world of Technology and get work-related experience.
            </Typography>

            <Typography variant="h6" style={{  borderTop:"solid", borderColor:"#ffd740 ", borderWidth:'2px', color:"#ffd740"}} align="left">Work experience</Typography>
            <br />
              
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Expanded Public Works Programme</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span>2018 - 2019: General Worker</span>
              <span></span><br />
              </div>
              <br/ >
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>South African Statistics</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span>2016 - 2017: Field Worker</span>
              <span></span>
              </div>
              <br />
            <Typography variant="h6" style={{ borderTop:"solid", borderColor:"#ffd740", borderWidth:'2px',color:"#ffd740"}} align="left">Education</Typography><br />

              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>UNISA: Diploma in Iformation Technology</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span>2016 - 2021</span>
              </div>
              <br/ >
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span><b>Jafta Mahlangu H.S: National Senior Certificate</b></span>
              </div>
              <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
            }}>
              <span>2004 - 2008</span>
              </div>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation="0">
           
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}