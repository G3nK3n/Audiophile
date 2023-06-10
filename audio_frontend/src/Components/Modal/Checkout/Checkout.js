import React from "react";
import classes from './Checkout.module.css';
import Summary from './Summary';

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const Checkout = () => {
    return(
        <div className={classes.CheckoutDiv}>
            <Container className={classes.CheckoutContainer}>
                <a href="#" className={classes.GoBack}>Go Back</a>

                <div className={classes.TheForm}>
                    <h1>Checkout</h1>
                    <Forms>
                        <h5>Billing Details</h5>
                        <Forms.Group className={classes.Name} controlId="formBasicName">
                            <Forms.Label>Name</Forms.Label> <br />
                            <Forms.Control type="name" />
                        </Forms.Group>
                        {/* <div className={classes.NameText}>
                            Add a " username=="" " to check if there is whitespace? It works after erasing the input
                            <p>{isEmpty || username==""? "Please enter a name." : " "}</p>
                        </div> */}
                        <Forms.Group className={classes.Email} controlId="formBasicEmail">
                            <Forms.Label>Email Address</Forms.Label> <br />
                            <Forms.Control type="email" />
                        </Forms.Group>
                        <Forms.Group className={classes.PhoneNumber} controlId="formBasicPhoneNumber">
                            <Forms.Label>Phone Number</Forms.Label> <br />
                            <Forms.Control type="phone_number" />
                        </Forms.Group>
                        <h5 className={classes.ShippingInfo}>Shipping Info</h5>
                        <Forms.Group className={classes.Address} controlId="formBasicAddress">
                            <Forms.Label>Address</Forms.Label> <br />
                            <Forms.Control type="address" />
                        </Forms.Group>
                        {/* <div className={classes.NameText}>
                            Add a " username=="" " to check if there is whitespace? It works after erasing the input
                            <p>{isEmpty || username==""? "Please enter a name." : " "}</p>
                        </div> */}
                        <Forms.Group className={classes.ZipCode} controlId="formBasicZipCode">
                            <Forms.Label>ZIP Code</Forms.Label> <br />
                            <Forms.Control type="zipcode" />
                        </Forms.Group>
                        <Forms.Group className={classes.City} controlId="formBasicCity">
                            <Forms.Label>City</Forms.Label> <br />
                            <Forms.Control type="city" />
                        </Forms.Group>
                        <Forms.Group className={classes.Country} controlId="formBasicCountry">
                            <Forms.Label>Country</Forms.Label> <br />
                            <Forms.Control type="country" />
                        </Forms.Group>
                        <h5 className={classes.PaymentDetailsTitle}>Payment Details</h5>
                        {['radio'].map((type) => {
                            return(
                                <div key={`default-${type}`} className={classes.eMoneyRadio}>
                                    <Forms.Label className={classes.PaymentMethodTitle}>Payment Method</Forms.Label>
                                    <div className={classes.eMoneyRadioButtons}>
                                        <Forms.Check
                                            label="e-Money"
                                            name="emoney"
                                            type={type}
                                            id={`default-${type}-1`}
                                        />
                                    </div>
                                    <div className={classes.eMoneyCashRadioButtons}>
                                        <Forms.Check
                                            label="Cash on Delivery"
                                            name="emoney"
                                            type={type}
                                            id={`default-${type}-2`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                        <Forms.Group className={classes.eMoneyNumber} controlId="formBasicEMoney">
                            <Forms.Label>e-Money Number</Forms.Label> <br />
                            <Forms.Control type="e-money" />
                        </Forms.Group>
                        <Forms.Group className={classes.eMoneyPIN} controlId="formBasicEMoneyPIN">
                            <Forms.Label>e-Money PIN</Forms.Label> <br />
                            <Forms.Control type="e-moneyPIN" />
                        </Forms.Group>
                    </Forms>
                </div>
                <div>
                    <Summary />
                </div>

            </Container>
        </div>
    )
}

export default Checkout;