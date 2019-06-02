import React from 'react'
import { Link } from 'react-router-dom'
import './Comp.css'

export default function AddsList(props) {
  if(props.adds === null) {
    return 'Loading'
  }
  
  const { adds } = props
  const addsItems = adds.map(add => <li key={add.id}><Link to={`/adds/${add.id}`}>{add.title}</Link></li>)
 
  return (
    <div className="Comp">
      <h1>ADVERTISEMENTS</h1>
      { addsItems }
    </div>
  )
}