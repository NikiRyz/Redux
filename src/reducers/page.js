import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_FAILURE,
} from '../actions/PageActions'

const initialState = {
  name: '',
  films: [],
  isFetching: false,
  error: '',
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILM_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_FILM_SUCCESS:
      return { ...state, films: action.payload, isFetching: false, error: '' }

    case GET_FILM_FAILURE:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
