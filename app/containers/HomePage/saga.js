import { takeEvery, put, call } from 'redux-saga/effects';
export function* databaseWrite(action) {
  // write to the database here
  const myResponse = yield call(() =>
    fetch('/api/list', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ item: action.payload }),
    }).then(response => response.json()),
  );

  if (myResponse.failure) {
    yield put({ type: 'MESSAGE', payload: myResponse.message });
  } else {
    yield put({ type: 'ADD_ITEM', payload: action.payload });
  }
}

export default function* watchDatabaseWrite() {
  yield takeEvery('DATABASE_WRITE', databaseWrite);
}
