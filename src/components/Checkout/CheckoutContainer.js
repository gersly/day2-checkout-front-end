import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Product from '../Product/Product';
import CheckoutForm from './CheckoutForm'


export default class Checkout extends Component {
    render() {
        return (
            <div>
                <Container>
                <Grid container spacing={1}>
                <Grid item xs={12} >
                <Typography 
                variant="h4" 
                className="title-main text-center" 
                gutterBottom> Awair 2nd Edition </Typography>
                <Typography  className="text-center" gutterBottom>
                 Awair tracks invisible fine dust and chemicals 
                 in your air and gives you personalized recommendations to 
                 help you stay safe and healthy.
                </Typography>
                </Grid>
                <Grid item xs={6} >
                <Product />
                </Grid>
                <Grid item xs={6}>
                <CheckoutForm />
                </Grid>
                </Grid>
                </Container>
            </div>
        )
    }
}
