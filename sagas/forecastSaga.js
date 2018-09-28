import { takeLatest, put } from 'redux-saga/effects';
import { REQUEST_FORECAST_DATA, RECEIVE_FORECAST_DATA } from '../actions/types'

export function* getForecastData(data) {
  try {
    const forecast = {desc: 'Sunny', temp: '19°C'}
    yield put({ type: RECEIVE_FORECAST_DATA, payload: forecast });
  } catch (e) {
    console.log(e);
  }
}

export function* forecastFetchWatcher() {
  yield takeLatest(REQUEST_FORECAST_DATA, getForecastData);
}