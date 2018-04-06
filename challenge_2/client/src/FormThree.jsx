import React from 'react';
import {Row, Input, Button} from 'react-materialize';

export default function FormThree(props){
  return (
    <Row>
      <Input s={6} label="Card Number (16 digits)" onChange={props.handleChange} id="cardNum" type="text"></Input>
      <Input s={6} label="Exp. Date" onChange={props.handleChange} id="expDate" type="text"></Input>
      <Input s={6} label="CCV" onChange={props.handleChange} id="ccv" type="text"></Input>
      <Input s={6} label="Billing Zip" onChange={props.handleChange} id="billingZip" type="text"></Input>
      <Button onClick={props.goToPage.bind(this, 2)}>prev</Button>
      <Button onClick={props.submitForm}>SUBMIT</Button>

    </Row>
  )
}
