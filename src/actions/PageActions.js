export const GET_FILM_REQUEST = 'GET_FILM_REQUEST'
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS'
export const GET_FILM_FAILURE = 'GET_FILM_FAILURE'

export function getFilms(index) {
  return dispatch => {
    dispatch({
      type: GET_FILM_REQUEST,
      payload: '',
    })

    fetch('https://ghibliapi.herokuapp.com/films?limit=3')
      .then(response => response.json())

      .then(function(json) {
        dispatch({
          type: GET_FILM_SUCCESS,
          payload: json[index],
        })
      })
  }
}
