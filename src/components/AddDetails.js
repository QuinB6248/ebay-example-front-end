import React from 'react'
import Form from './Form'
import './Comp.css'
import { Link } from 'react-router-dom'

export default function AddDetails(props) {
  if(props.add === null) {
    return 'Loading'
  }

  const { add } = props
  const { editMode } = props
  const { onEdit } = props
  const { onSubmit } = props
  const { onChange } = props
  const { values } = props
  const { onDelete} = props
  

  const form = editMode && <Form  onChange={onChange}
                                  onSubmit={onSubmit}
                                  values={ values } />
  return(
    <div className="Comp">
      <Link to={`/adds`}>home</Link>
      <h1>{add.title}</h1>
      <p>{add.description}</p>
      <img src={add.picture}/>
      <h6>${add.price}</h6>
      <button onClick={onDelete}>DELETE</button> 
      <button onClick={onEdit}>EDIT</button>
      <div>
        {form}
      </div>
    </div>
  )


}