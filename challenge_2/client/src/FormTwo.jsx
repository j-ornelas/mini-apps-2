import React from 'react';
import {Row, Input, Button} from 'react-materialize';

export default function FormTwo({handleChange, goToPage}){
  return (
    <Row>
        <Input s={6} label="First Name" onChange={handleChange} id="firstName" type="text"></Input>
        <Input s={6} label="Last Name" onChange={handleChange} id="lastName" type="text"></Input>
        <Input s={6} label="Address Line 1" onChange={handleChange} id="addressOne" type="text"></Input>
        <Input s={6} label="Address Line 2" onChange={handleChange} id="addressTwo" type="text"></Input>
        <Input s={6} label="City" onChange={handleChange} id="city" type="text"></Input>
        <Input s={6} label="State" onChange={handleChange} id="state" type="text"></Input>
        <Input s={6} label="Zip Code" onChange={handleChange} id="zip" type="text"></Input>
        <Input s={6} label="Phone #" onChange={handleChange} id="phone" type="text"></Input>
        <Button onClick={goToPage.bind(this, 1)}>prev</Button>
        <Button onClick={goToPage.bind(this, 3)}>next</Button>
      </Row>
  )
}
