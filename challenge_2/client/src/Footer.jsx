import React from 'react';
import {Footer} from 'react-materialize';

export default function FormOne({handleChange, goToPage}){
  return (
    <Footer className="orange" copyrights="Copyright 2018 John Ornelas"
      moreLinks={
        <a className="grey-text text-lighten-4 right">More Links</a>
      }>

    </Footer>
  )
}
