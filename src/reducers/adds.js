import { ADDS_FETCHED, ADD_CREATED } from '../actions/adds'
import { ADD_DELETE} from '../actions/add'


const reducer = (state = null, action) => {
  switch (action.type) {
  case ADDS_FETCHED:
    return action.payload.adds
  case ADD_CREATED:
      
    return [...state, action.payload]
  case ADD_DELETE:
    return state.filter(add => add.id !== action.payload)
  
  default:
    return state
  }
}


export default reducer
