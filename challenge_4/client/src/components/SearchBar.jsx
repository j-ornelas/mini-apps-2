import React from 'react';


export default function SearchBar (props){
  return (
    <div>
      <input placeholder="search for anything your heart desires..." value={props.searchTerm} onChange={props.handleChange} type="text"></input>
      <button onClick={props.search.bind(this, props.searchTerm, 0)}>Seach</button>
    </div>
  )
}
