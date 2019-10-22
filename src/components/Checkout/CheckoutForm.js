import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class CheckoutForm extends Component {
    render() {
        return (
            <div>
                <Container>
                <Typography variant="h5" className="text-center pt-1" gutterBottom>
                Indoor air can be 5x more polluted than outside, 
                due to everyday factors like paint, furniture, carpet,
                 air fresheners, toys, and much more.
                </Typography>
                <Typography variant="h3" className="text-center pt-2">$ 189.00</Typography>
                <form className="pt-1">
                <FormControl variant="outlined" className="form-control">
                <InputLabel>
                Quantity
                </InputLabel>
                <Select native >
                <option value=""/>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                </Select>
                </FormControl>
                <div className="spacer"></div>
                <Button variant="contained" className="bg-black">Buy Now</Button>
                </form>
                </Container>
            </div>
        )
    }
}
