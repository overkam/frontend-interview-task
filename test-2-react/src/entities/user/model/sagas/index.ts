import { fork } from 'redux-saga/effects';

import login from './login';

export function* userSagas() {
  yield fork(login);
}
