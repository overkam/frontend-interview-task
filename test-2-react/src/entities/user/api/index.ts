import { api } from '@/shared'
import { LoginReq, LoginResponse } from './types'

const login = (data: LoginReq) => {
    return api<LoginResponse>({
        url: '/api/endpoint/',
        method: 'POST',
        data,
    })
}

export const userApi = {
    login,
}

export * from './types'
