import React from 'react'
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts'

function Chart() {
    const dataItem =[
        {
            name: 'Jan',
            FirstListing: 200,
            SecondListing: 600
        },
        {
            name: 'feb',
            FirstListing: 800,
            SecondListing: 50
        }, {
            name: 'mar',
            FirstListing: 300,
            SecondListing: 400
        }, {
            name: 'apr',
            FirstListing: 200,
            SecondListing: 900
        }, {
            name: 'may',
            FirstListing: 300,
            SecondListing: 600
        }, {
            name: 'jun',
            FirstListing: 300,
            SecondListing: 600
        }
    ]
  return (
    <>
    <ResponsiveContainer width={"100%"} height={"100%"}  >
    <BarChart width={500} height={400} data={dataItem}>
      <Bar dataKey={'FirstListing'} fill='#509cdb'/>
      <XAxis dataKey={'name'}/>
      <YAxis/>
      <Legend/>
      <Tooltip/>
      <Bar dataKey={'SecondListing'} fill='#2c2b2b'/>
    </BarChart>
    <CartesianGrid/>
    </ResponsiveContainer> 
    </>
  )
}

export default Chart
