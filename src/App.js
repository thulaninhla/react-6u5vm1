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
import Avatar from '@material-ui/core/Avatar';


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
  
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const myName = "Thulani Nhlapo "
  const myDesc = "IT Graduate"
  const myPhone = "0724389800"
  const myLinked = "linkedin.com/in/thulani-nhlapo-80783396"
  const myEmail = "thulaninhlapo2@gmail.com"
  const myLoca = "6205 Section R Mamelodi"

  return (
   
    <div className={classes.root}>
    
      <AppBar style={{backgroundColor:"#37474f"}} position="Static">
        <Toolbar>
        <Avatar style={{ height: "180px", width: "180px" }}>
          <img height="180px" width="180px" src="https://scontent.fjnb9-1.fna.fbcdn.net/v/t1.6435-9/c0.0.860.860a/s851x315/217837506_4343475239042297_6342682972450939567_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=da31f3&_nc_eui2=AeE0s27U2_zzAAOGlrO9robGtZK17mZ8Sgm1krXuZnxKCdDdp7PBerWTjAbqbf0T3cuOBMuFxSBQr6MvGRIvSgOk&_nc_ohc=LwZ9lLOkVgQAX-_wDV9&tn=7h8J9PpG38TE1XTO&_nc_ht=scontent.fjnb9-1.fna&oh=f638fc0b6c52131c0e510ea4b47aeb47&oe=60F603EE
          " name="My image" />
        </Avatar>
      <Typography variant="h5" color="#37474f"  style={{textAlign:"center", marginLeft:'210px', color:"	#808000"}}><h3>Thulani Nhlapo </h3><p>IT Graduate</p></Typography>
    
      </Toolbar>
      </AppBar>
      
      <Grid container spacing={}>
       
      
        <Grid item xs={5}>
      
          <Paper style={{}} className={classes.paper} elevation="0">

          <Grid style={{    height:'275px' ,borderBottom:"solid", borderColor:"	#808000 ", borderWidth:'2px' }}  >
            <Typography style={{margin:'15px', color:"	#808000"}}variant="h6" color="secondary"    align="left">Contact</Typography>
            
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
             
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
              marginTop:'15px', 
            }}>
             <EmailIcon fontSize="large"/>
             <span>{myEmail}</span>
             </div>
            
             <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            }}>
             <LinkedInIcon fontSize="large"/>
             <span>{myLinked}</span>
             </div>

             <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
             
            }}>
             <LocationOnIcon fontSize="large"/>
             <span>{myLoca}</span>
             </div>
              <br />
              </Grid>

              <Grid style={{    height:'270px' ,borderBottom:"solid", borderColor:"	#808000 ", borderWidth:'2px' }}  >
            <Typography style={{marginTop:'15px', color:"	#808000"}} variant="h6"  align="left">Skills</Typography>
            <br />
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            }}>
            <FiberManualRecordIcon /><span>Html & CSS</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            }}>
            <FiberManualRecordIcon /><span>PHP</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            }}>
            <FiberManualRecordIcon /><span>MySQL</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            }}>
            <FiberManualRecordIcon /><span>Microsoft Office 365</span>
            </div>
            <div style={{
              display: 'flex',
              align: 'center',
              flexWrap: 'wrap',
              marginTop:'15px', 
            
            }}>
            <FiberManualRecordIcon /><span>Visual Basic</span>
            </div>
            <br />
            </Grid>
            <Grid style={{    height:'220px' ,borderTop:"solid", borderColor:"	#808000 ", borderWidth:'0px' }}  >
            <Typography style={{ marginTop:'15px', color:"#808000"}} variant="h6" color="secondary" align="left">Reference</Typography><br />
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
</Grid>
          </Paper>
        </Grid>
        <Grid  style={{ borderLeft:"solid", borderColor:" 	#808000 ", borderWidth:'2px', marginTop:'15px'  }} item xs={6}>
          <Paper className={classes.paper} elevation="0">
          
            <Typography style={{ marginBottom:'15px',  color:	"#808000"}} variant="h6" color="secondary" align="left">Profile</Typography>
            <Typography variant="h8" align="left" paragraph>
            <Grid style={{    height:'200px' ,borderTop:"solid", borderColor:"#808000", borderWidth:'2px' }}  ><br />
            I believe I am the right candidate for this poertunity as i have the skill set to meet the company's objective in terms of the development of back-end and front-end of web-based, desktop and mobile applications in PHP, Visual Basic. Html, CSS, JAVA, and the set of database managment system. By joining the team, i will be able to learn new skills in the world of Technology and get work-related experience.
            </Grid>
            </Typography>
            
            <Typography variant="h6" style={{  marginBottom:'15px', color:"	#808000"}} align="left">Work experience</Typography>
            <Grid style={{    height:'200px' ,borderTop:"solid", borderColor:"#808000", borderWidth:'2px' }}  ><br />
              
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
              </Grid>

              <Typography variant="h6" style={{ marginTop:'15px', color:"	#808000"}} align="left">Education</Typography><br />
              <Grid style={{    height:'220px' ,borderTop:"solid", borderColor:"#808000 ", borderWidth:'2px' }}  ><br />

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
          </Grid>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
   
  );
}
