import React from 'react'
import {loadAdds} from '../actions/adds'
import {connect} from 'react-redux'
import AddsList from './AddsList'

class AddsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdds()
  }

  render() {
    return (
    <AddsList adds={this.props.adds} />
    )
  }
}

const mapStateToProps = state => ({
  
  adds: state.adds
})

export default connect(mapStateToProps, {loadAdds})(AddsContainer)