import React from 'react'
import {connect} from 'react-redux'
import AddDetails from './AddDetails'
import {loadAdd, deleteAdd, updateAdd} from '../actions/add'


class AddDetailsContainer extends React.Component {
  state = {
    editMode: false
  }

  componentDidMount() {
    this.props.loadAdd(Number(this.props.match.params.id))
  }
  onDelete = () => {
    this.props.deleteAdd(this.props.add.id)
    this.props.history.push('/adds')
  }
  onEdit = () => {
    
    this.setState({
      editMode: true,
      values: {
        title: this.props.add.title ? this.props.add.title : '',
        picture: this.props.add.picture ? this.props.add.picture : '',
        description: this.props.add.description ? this.props.add.description : '',
        price: this.props.add.price ? this.props.add.price : '',
        }
     })
  }
  onChange = (event) => {
    
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateAdd(this.props.add.id, this.state.values)
  }
  render() {
    
    return (
      <AddDetails add={this.props.add}
                  onDelete={this.onDelete} 
                  editMode={this.state.editMode}
                  onEdit={this.onEdit}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  values={this.state.values}/>
    )
  }



}

const mapStateToProps = state => ({
  add: state.add,
  
})

export default connect(mapStateToProps, {loadAdd, deleteAdd, updateAdd})(AddDetailsContainer)
