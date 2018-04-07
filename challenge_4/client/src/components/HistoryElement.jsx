import React from 'react';


export default function HistoryElement (props){
  return (
    <div><span className="date">{props.item.date}</span><span className="description">{props.item.description}</span></div>
  )
}
