import React from 'react';
import HistoryElement from './HistoryElement.jsx'


export default function ElementList (props){
  const listItems = props.items.map((item, index)=>
  <div key={index} className={index % 2 ? 'even' : 'odd'}><HistoryElement key={index} item={item} /></div>
  )
  return (
    <div>
    {listItems}
    </div>
  )
}
