import { put, call, takeLatest } from 'redux-saga/effects';

export function* databaseRead() {
  // read from the database here
  try {
    const items = yield call(() =>
      fetch('/api/list').then(response => response.json()),
    );
    yield put({ type: 'SET_ITEMS', payload: items });
  } catch (e) {
    // Error handling: if it can't connect, then it will display a single string alerting the user
    yield put({ type: 'SET_ITEMS', payload: [{ item: 'An error occurred' }] });
  }
}

export default function* watchDatabaseRead() {
  yield takeLatest('DATABASE_READ', databaseRead);
}
