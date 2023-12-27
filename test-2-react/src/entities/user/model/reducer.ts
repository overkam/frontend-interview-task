import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { UserState } from './types'
import { LoginReq } from '../api'

const initialUserState: UserState = {
    email: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        updateUserState: (state: UserState, action: PayloadAction<Partial<UserState>>) => {
            return {
                ...state,
                ...action.payload,
            }
        },

        clearUserState: () => ({
            ...initialUserState,
        }),

        login(state, action: PayloadAction<LoginReq>) {},
    },
})

export const { reducer } = userSlice
export const { actions: userActions } = userSlice
