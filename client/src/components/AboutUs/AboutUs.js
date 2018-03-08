import React from 'react';
import { Grid } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Grid className="container-margin">
            <h2>About Pizzeria Uno</h2>
            <p className="welcome-text">Welcome to our pizzeria, where you can order mystery pizzas where the toppings don't match the description at all! In the mood for pepperoni? Have a mushroom pizza! We hope you like our pizzas, we think they're great!</p>
            <div className="company-info" className="well well-lg">
                <p>Address: Pizza Street 55, Miami, FL</p>
                <p>telephone: 305-740-4813</p>
                <p>email: pizza@pizzeriauno.com</p>
            </div>
        </Grid>
    )
};

export default AboutUs;