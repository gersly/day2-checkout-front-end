import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default class TopNav extends Component {
    render() {
        return (
            <div>
                 <AppBar className="bg-light" position="static">
                 <Toolbar >
                 <Typography variant="h5">
                 Awair
                 </Typography> 
                 <span className="col-center">
                 <Typography variant="h6">
                 <Link href="#" className="spacer-x-sm">
                    Awair 2nd Edition
                </Link>
                <Link href="#" className="spacer-x-sm">
                    Awair Glow-C
                </Link>
                <Link href="#" className="spacer-x-sm">
                    Design
                </Link>
                <Link href="#" className="spacer-x-sm">
                    Business
                </Link>
                <Link href="#" className="spacer-x-sm">
                    Blog
                </Link>
                <Link href="#" className="spacer-x-sm">
                    Press
                </Link>
                </Typography>
                 </span>
                 </Toolbar>
                </AppBar>
            </div>
        )
    }
}
