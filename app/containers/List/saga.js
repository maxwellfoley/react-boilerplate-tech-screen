import { put, call, takeLatest } from 'redux-saga/effects';

export function* databaseRead() {
  // read from the database here
  const items = yield call(() =>
    fetch('/api/list').then(response => response.json()),
  );

  // TODO: error handling
  yield put({ type: 'SET_ITEMS', payload: items });
}

export default function* watchDatabaseRead() {
  yield takeLatest('DATABASE_READ', databaseRead);
}

/*
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchDatabaseRead(), watchDatabaseWrite()]);
}
*/
