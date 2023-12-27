import { userSagas } from '@/entities/user/model'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
    yield fork(userSagas)
}
