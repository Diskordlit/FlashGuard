import React from 'react'
import { Typography, Card, Button, Grid, Paper } from '@material-ui/core'
import { useStyles } from '../styling/useStyles';
import bg from '../assets/purpel.jpg';
import bg2 from '../assets/chill.svg';
import GetAppIcon from '@material-ui/icons/GetApp';
import SearchIcon from '@material-ui/icons/Search';


export default function HomePage() {
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <div className={classes.root}>
            <Grid justifyContent="center" container spacing={3}>
                <Grid item xs={12}>
                    <div class="banner">
                        <img class="bannerimg" src={bg} alt="Girl Eyes" />
                        <img class="bannerimg2" src={bg2} alt="Movie Chilling" />
                        <div class="bannerText">
                            <h1>FLASHGUARD</h1>
                            <h3>A community driven project to ensure a safe movie experience for those susceptible to epilepsy.</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} padding={10}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color="secondary" size='large' startIcon={<GetAppIcon />}>Download</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}
