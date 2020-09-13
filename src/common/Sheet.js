import { Drawer, IconButton, DialogTitle, Box } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
    sheetTitle: {
        padding: 0,
        maring: '0 0 24px 24px'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    boxAlign: {
        textAlign: 'right'
    }
}))

export const Sheet = ({isOpen = false, handleClose, children}) => {

    const classes = useStyles();
    console.log('sheet', isOpen)
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <DialogTitle className={classes.sheetTitle}>
                <Box className={classes.boxAlign}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            {children}
        </Drawer>
    )
}