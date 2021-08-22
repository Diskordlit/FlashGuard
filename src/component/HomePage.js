import React from 'react'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { useStyles } from '../styling/useStyles';
import bg from '../assets/purpel.jpg';
import bg2 from '../assets/chill.svg';
import GetAppIcon from '@material-ui/icons/GetApp';

function redirectuser() {

}

export default function HomePage() {
    const classes = useStyles();
    const redirectuser = () => {
        window.location.href = 'https://github.com/Diskordlit/FlashGuard'
    }
    // const [values, setValues] = React.useState({});
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    return (
        <div className={classes.root}>
            <Grid justifyContent="center" container spacing={3}>
                <Grid item xs={12}>
                    <div class="banner">
                        <img class="bannerimg" src={bg} alt="Girl Eyes" />
                        <img class="bannerimg2" src={bg2} alt="Movie Chilling" />
                        <div class="bannerText">
                            <Typography>
                                <h1>FLASHGUARD</h1>
                                <h3>A community driven project to ensure a safe movie experience for those susceptible to epilepsy.</h3>
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} padding={10}>
                    <Paper className={classes.paper}>
                        <Typography>
                            <h2>Download our extension and start checking for Netflix shows with potential signs of flashing lights</h2>
                        </Typography>
                        <Button variant="contained" color="secondary" size='large' startIcon={<GetAppIcon />} onClick={redirectuser}>Download</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}
