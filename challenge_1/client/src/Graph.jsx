import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default function Graph (props){
  return (
    <div className="graph">
    <Line
      data={props.chartData}
      width={200}
      height={50}
      options={{
        maintainAspectRatio: true
      }}
    />
    </div>
  )
}
