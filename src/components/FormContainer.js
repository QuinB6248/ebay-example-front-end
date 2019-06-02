import React from 'react'
import { connect } from 'react-redux'
import {createAdds} from '../actions/adds'
import Form from './Form'


class FormContainer extends React.Component{
  state = {
    title: '',
    picture: '',
    description: '',
    price: ''
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createAdds(this.state)
    this.setState({
      title: '',
      picture: '',
      description: '',
      price: ''
    })

  }


  render() {
    
    return(
      <Form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
      />
    )
  }
}

export default connect(null, {createAdds})(FormContainer)