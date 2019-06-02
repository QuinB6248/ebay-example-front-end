import { ADD_FETCHED, ADD_UPDATE} from '../actions/add'


const reducer = (state = null, action) => {
  switch (action.type) {
    case ADD_FETCHED:
       
      return action.payload
      case ADD_UPDATE:
        
        return action.payload
    default:
      return state
  }
}

export default reducer