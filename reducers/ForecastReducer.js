import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../actions/types'

const forecastReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_API_DATA:
          return { ...state, data: action.payload }
        default:
          return state;
      }
}

export default forecastReducer