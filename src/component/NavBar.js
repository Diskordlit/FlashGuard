import React from 'react'
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../styling/useStyles';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

export default function NavBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appBarStyle}>
                <Toolbar className={classes.toolBarStyle}>
                    <Typography className={classes.title} variant="h4" noWrap>
                        FlashGuard
                    </Typography>
                    <div className="buttonContainer">
                        <Button className={classes.toolBarButton} variant="contained" color="secondary">Try The Extension</Button>
                        <Button className={classes.toolBarButton} variant="contained" color="secondary">About Us</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
