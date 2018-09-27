import { RECEIVE_FORECAST_DATA } from './types'

export const receiveForecastData = (data) => ({ type: RECEIVE_FORECAST_DATA, payload: data })