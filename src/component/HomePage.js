import React from 'react'
import { Typography, Card, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid, Paper } from '@material-ui/core'
import { useStyles } from '../styling/useStyles';
import bg from '../assets/bg2.jpg'
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
                        <div class="bannerText">
                            <h1>Test test testing</h1>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} padding={10}>
                    <Paper className={classes.paper}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Search Movies</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                labelWidth={110}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}
