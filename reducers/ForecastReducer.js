import { RECEIVE_FORECAST_DATA } from '../actions/types'
const initialState = {
  forecast: {}
}
const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_FORECAST_DATA:
          return { ...state, forecast: action.payload }
        default:
          return state;
      }
}

export default forecastReducer