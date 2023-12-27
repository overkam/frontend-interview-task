import * as Yup from 'yup'

const REGEXP_EMAIL =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export enum Steps {
    one = "ONE",
    two = "TWO"
}

export type LoginFormFields = {
    email: string
    hasAgreement: boolean
}

export const initialLoginFormState: LoginFormFields = {
    email: '',
    hasAgreement: false,
}
export const validationLoginFormSchema = Yup.object({
    email: Yup.string()
        .test('email test', 'Enter valid email', (value) => {
            return REGEXP_EMAIL.test(value || '')
        })
        .required('Enter your email'),
    hasAgreement: Yup.boolean().required(),
})
