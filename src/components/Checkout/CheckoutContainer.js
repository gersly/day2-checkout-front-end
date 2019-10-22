import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Product from '../Product/Product';


export default class Checkout extends Component {
    render() {
        return (
            <div>
                <Container>
                <Grid container spacing={1}>
                <Grid item xs={12}>
                11
                </Grid>
                <Grid item xs={6}>
                <Product />
                </Grid>
                <Grid item xs={6}>
                
                </Grid>
                </Grid>
                </Container>
            </div>
        )
    }
}
