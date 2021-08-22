import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { useStyles } from '../styling/useStyles';


export default function NavBar() {
    const classes = useStyles();

    return (
            <AppBar className={classes.appBarStyle}>
                <Toolbar className={classes.toolBarStyle}>
                    <Typography className={classes.title} variant="h4">
                        FlashGuard
                    </Typography>
                    <div className="buttonContainer">
                        {/* <Button className={classes.toolBarButton} variant="contained" color="secondary">Try The Extension</Button>
                        <Button className={classes.toolBarButton} variant="contained" color="secondary">Examples</Button>
                        <Button className={classes.toolBarButton} variant="contained" color="secondary">About Us</Button> */}
                    </div>
                </Toolbar>
            </AppBar>
    )
}
