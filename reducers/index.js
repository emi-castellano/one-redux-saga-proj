import { combineReducers } from 'redux'

import forecastReducer from './ForecastReducer'

export default combineReducers({
    dataForecast: forecastReducer
})