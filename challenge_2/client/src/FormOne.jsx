import React from 'react';
import {Row, Input, Button} from 'react-materialize';

export default function FormOne({handleChange, goToPage}){
  return (
    <div>
    <Row>
    <Input s={4} label="email" onChange={handleChange} id="email" type="text"></Input>
    </Row>

    <Row>
    <Input s={4} label="password" onChange={handleChange} id="password" type="text"></Input>
    </Row>
    <Button onClick={goToPage.bind(this, 2)}>next</Button>
    </div>
  )
}
