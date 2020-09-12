import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    }
}))

export const Sheet = ({open = false, children}) => {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            {children}
        </Drawer>
    )
}