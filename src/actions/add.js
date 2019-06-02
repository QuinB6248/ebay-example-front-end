import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ADD_FETCHED = 'ADD_FETCHED'

const addFetched = add => ({
  type: ADD_FETCHED,
  payload: add
})

export const loadAdd = (id) => (dispatch) => {
  request(`${baseUrl}/adds/${id}`)
    .then(response => {
      dispatch(addFetched(response.body))
    })
    .catch(console.error)
}

export const ADD_DELETE = 'ADD_DELETE'

const addDelete = add => ({
  type: ADD_DELETE,
  payload:  add
})

export const deleteAdd = (id) => dispatch => {
  request.delete(`${baseUrl}/adds/${id}`)
        .then(dispatch(addDelete(id)))
        .catch(console.error)
}

export const ADD_UPDATE = 'ADD_UPDATE'

  const addUpdate = add => ({
    type: ADD_UPDATE,
    payload:add
  })

  export const updateAdd = (id, data) => dispatch => {
    request.put(`${baseUrl}/adds/${id}`)
           .send(data)
           .then( dispatch(addUpdate(data)) )
            //console.log('Miauw',response)
             
           
           .catch(console.error)
  }