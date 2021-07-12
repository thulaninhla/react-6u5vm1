import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import BookSharpIcon from '@material-ui/icons/BookSharp';
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const myHome = "6205 Section RD5 Gazama Street Mamelodi"
  const myEmail = "thulaninhlapo2@gmail.com"

  return (
   
    <div className={classes.root}>
      <>
      <CssBaseline />
      <AppBar position="relative">
      <Toolbar>
      <ButtonBase className={classes.image}>
              <img className={classes.img} alt="facebook" src="https://web.facebook.com/photo.php?fbid=168774159845780&set=t.100001395910019&type=3"/>
            </ButtonBase>
      <Typography variant="h5" align="center">{myName}</Typography>
      </Toolbar>
      </AppBar>
        </>
      <Grid container spacing={}>
        <Grid item xs={12} >
          <Paper className={classes.paper} elevation="0">
            
      <Typography variant="h5" color="primary">{myDesc}</Typography>
          </Paper>
        </Grid>
      
        <Grid item xs={6}>
      
          <Paper className={classes.paper} elevation="0">
            <Typography variant="h6" color="primary" >Contact</Typography>
            <Typography variant="Body1"><EmailIcon color="primary" fontSize="small"></EmailIcon>
            </Typography>
            <Typography>{myEmail}</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="body1"><PhoneIcon color="primary" fontSize="small"></PhoneIcon>
            </Typography>
            <Typography>{myPhone}</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h4"><HomeIcon color="primary" fontSize="small"></HomeIcon>
            </Typography>
            <Typography variant="body1">{myHome}</Typography>

            <Typography variant="h6" color="primary">Skill</Typography>
            <Typography variant="body1">Html & CSS</Typography>
            <Typography variant="body1">PHP</Typography>
            <Typography variant="body1">MySQL</Typography>
            <Typography variant="body1">Visual Basic</Typography>

            <Typography variant="h6" color="primary">languages</Typography>
            <Typography variant="body1">English</Typography>
            <Typography variant="body1">IsiZulu</Typography>
            <Typography variant="body1">Afrikaans</Typography>
            <Typography variant="body1">Setswana</Typography>
            <Typography variant="body1">N. Sotho</Typography>

            <Typography variant="h6" color="primary">Hobbies</Typography>
            <MusicNoteSharpIcon color="primary" fontSize="small"></MusicNoteSharpIcon>
            <BookSharpIcon color="primary" fontSize="small"></BookSharpIcon><MovieSharpIcon color="primary" fontSize="small"></MovieSharpIcon><SportsSoccerSharpIcon color="primary" fontSize="small"></SportsSoccerSharpIcon>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation="0">
            <Typography variant="h6" color="primary">About Me</Typography>
            <Typography variant="body1" align="center" paragraph>
            I believe and hope that my field of study in Information Technology will make me an asset to your organization and I would appreciate your careful consideration of my credentials as presented in this CV. I believe I am the right candidate for this opportunity as I have the skill set to meet the company’s objectives in terms of the development of back-end and front-end of Web-based, Desktop and Android Applications in PHP (Web-based), Visual Basic.NET (Desktop), HTML, CSS, JAVA (Android) programing languages, and the set of databases to communicate with application using database software like Oracle Relational Database Management System, Microsoft Access, and MySQL. By joining the academy, I will be able to learn new skills in the world of technology and get work-related experience. 
            </Typography>
            <Typography variant="h6" color="primary">Education</Typography>
            <Typography variant="body1" align="">2021: Diploma in Information Technology </Typography>
            <Typography variant="body1" align="">2008: Grade 12 </Typography>

            <Typography variant="h6" color="primary">Work experience</Typography>
            <Typography variant="body1" align="">01 August 2018 – 31 August 2019 Company : Expanded Public Works Programme
            Position Held : General Worker
            Duties : Cleaning & Culinary work</Typography>
            <Typography variant="body1" align="">05 April 2016 – 10 November 2016 Company : South African Statistics
            Position Held : Field Worker
            Duties : Community Surveying</Typography>

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

