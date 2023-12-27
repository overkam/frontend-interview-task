import { call, put, takeLatest } from 'typed-redux-saga'
import { userActions } from '../reducer'
import { userApi } from '../..'
import { logger, showToastMessage } from '@/shared'

export function* loginSaga({ type, payload: { email } }: ReturnType<typeof userActions.login>) {
    try {
        const res = yield* call(userApi.login, { email })
        console.log('res', res)

        yield put(
            userActions.updateUserState({
                email,
            })
        )

        showToastMessage('success', 'Success!')
    } catch (err) {
        logger('User login', err)
        showToastMessage('error', 'Error!')
    }
}

export default function* listener() {
    yield takeLatest(userActions.login.type, loginSaga)
}
