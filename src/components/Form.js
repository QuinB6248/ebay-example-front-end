import React from 'react'
import './Comp.css'

export default function Form(props) {
  const { onSubmit } = props
  const { onChange } = props
  const {  values } = props
  

  return(
    <div className="Comp">
      <form onSubmit={onSubmit}>
        <div>
          <h4>Title</h4>
          <input name="title" type="text" value={values.title} onChange={onChange}/>
        </div>
        <div>
           <h4>Description</h4>
          <input name="description" type="text" value={values.description} onChange={onChange}/>
        </div>
        <div>
          <h4>PictureUrl</h4>
          <input name="picture" type="text" value={values.picture} onChange={onChange}/>
        
        </div>
        <div>
          <h4>Price</h4>
          <input name="price" type="number" value={values.price} onChange={onChange}/>
        </div>
        
        <button type="submit">Save</button>
      </form>
    </div>
  )
}