import React from 'react';
import {Line} from 'react-chartjs-2';


export default function Graph (props){
  return (
    <div className="graph">
    <Line
      data={props.chartData}
      width={200}
      height={89}
      options={{
        maintainAspectRatio: true
      }}
    />
    </div>
  )
}
