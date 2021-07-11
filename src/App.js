import React from 'react';
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
  const myName = "Thulani Nhlapo"
  const myDesc = "IT Graduate"
  const myPhone = "0724389800"
  const myHome = "6205 Section RD5 Gazama Street Mamelodi"
  const mylang = "exampleweb.co.za"
  const myEmail = "thulaninhlapo2@gmail.com"
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4">{myName}</Typography>
            <Typography variant="h5">{myDesc}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="h7"><EmailIcon></EmailIcon>
            </Typography>
            <Typography>{myEmail}</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h7"><PhoneIcon></PhoneIcon>
            </Typography>
            <Typography>{myPhone}</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h7"><HomeIcon></HomeIcon>
            </Typography>
            <Typography>{myHome}</Typography>

            <Typography variant="h6">Skill</Typography>
            <Typography>Html & CSS</Typography>
            <Typography>PHP</Typography>
            <Typography>MySQL</Typography>
            <Typography>Visual Basic</Typography>

            <Typography variant="h6">languages</Typography>
            <Typography>English</Typography>
            <Typography>IsiZulu</Typography>
            <Typography>Afrikaans</Typography>
            <Typography>Setswana</Typography>
            <Typography>N. Sotho</Typography>

            <Typography variant="h6">Hobbies</Typography>
            <MusicNoteSharpIcon></MusicNoteSharpIcon>
            <BookSharpIcon></BookSharpIcon><MovieSharpIcon></MovieSharpIcon><SportsSoccerSharpIcon></SportsSoccerSharpIcon>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">About Me</Typography>
            <Typography variant="h7" align="" paragraph>
            believe and hope that my field of study in Information Technology will make me an asset to your organization and I would appreciate your careful consideration of my credentials as presented in this CV. I believe I am the right candidate for this opportunity as I have the skill set to meet the company’s objectives in terms of the development of back-end and front-end of Web-based, Desktop and Android Applications in PHP (Web-based), Visual Basic.NET (Desktop), HTML, CSS, JAVA (Android) programing languages, and the set of databases to communicate with application using database software like Oracle Relational Database Management System, Microsoft Access, and MySQL. By joining the academy, I will be able to learn new skills in the world of technology and get work-related experience. 
            </Typography>
            <Typography variant="h6">Education</Typography>
            <Typography variant="h7" align="">2021: Diploma in Information Technology </Typography>
            <Typography variant="h7" align="">2008: Grade 12 </Typography>

            <Typography variant="h6">Work experience</Typography>
            <Typography variant="h7" align="">01 August 2018 – 31 August 2019 Company : Expanded Public Works Programme
            Position Held : General Worker
            Duties : Cleaning & Culinary work</Typography>
            <Typography variant="h7" align="">05 April 2016 – 10 November 2016 Company : South African Statistics
            Position Held : Field Worker
            Duties : Community Surveying</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}