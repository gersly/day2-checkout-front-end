import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default class TopNav extends Component {
    render() {
        return (
            <div>
                 <AppBar position="static">
                 <Toolbar>
                 <Typography variant="h6" >
                 Optiek Company Name
                 </Typography>
                 </Toolbar>
                </AppBar>
            </div>
        )
    }
}
