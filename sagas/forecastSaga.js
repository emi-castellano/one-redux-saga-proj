import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_FORECAST_DATA } from '../actions/types'
import { receiveForecastData } from '../actions/forecastActions'

function* getForecastData() {
    try {
      const data = {status: 200, weather: { desc: 'Sunny', temp: '19°C', city: 'Montevideo' }}
      yield put(receiveForecastData(data));
    } catch (e) {
      console.log(e);
    }
  }

export default function* forecastFetchWatcher() {
  yield takeLatest(REQUEST_FORECAST_DATA, getForecastData);
}