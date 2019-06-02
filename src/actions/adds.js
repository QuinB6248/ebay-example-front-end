import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ADDS_FETCHED = 'ADDS_FETCHED'

const addsFetched = adds => ({
  type: ADDS_FETCHED,
  payload: adds
})

export const loadAdds = () => (dispatch, getState) => {
  if (getState().adds) return // when the state already contains adds, we don't fetch them again
  request(`${baseUrl}/adds`) // a GET /adds request
    .then(response => {
      dispatch(addsFetched(response.body))// dispatch an ADDS_FETCHED action that contains the adds
    })
    .catch(console.error)
}

export const ADD_CREATED = 'ADD_CREATED'

const addCreate = add => ({
  type: ADD_CREATED,
  payload: add
})

export const createAdds = (data) => dispatch => {
    request
        .post(`${baseUrl}/adds`)
        .send(data)
        .then(response => {
          dispatch(addCreate(response.body))
        })
        .catch(console.error)
          
}
  