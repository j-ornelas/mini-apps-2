import React from 'react';
import {NavItem, Icon, Navbar} from 'react-materialize';

export default function FormOne({handleChange, goToPage}){
  return (
    <Navbar className="orange" brand='InfoGrab' right>
      <NavItem><Icon>search</Icon></NavItem>
      <NavItem><Icon>view_module</Icon></NavItem>
      <NavItem><Icon>refresh</Icon></NavItem>
      <NavItem><Icon>more_vert</Icon></NavItem>
    </Navbar>
  )
}
