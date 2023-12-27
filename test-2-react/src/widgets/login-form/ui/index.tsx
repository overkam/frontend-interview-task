import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Checkbox, FormInput, ProceedButton } from '@/shared'

import { initialLoginFormState, LoginFormFields, Steps, validationLoginFormSchema } from '../lib'
import { useDispatch } from 'react-redux'
import { userModel } from '@/entities/user'

export function LoginForm() {
    const dispatch = useDispatch()
    const [step, setStep] = useState(Steps.one)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<LoginFormFields>({
        mode: 'all',
        resolver: yupResolver(validationLoginFormSchema),
        defaultValues: {
            ...initialLoginFormState,
            ...(sessionStorage.getItem('email') && { email: sessionStorage.getItem('email')! }),
        },
    })
    const email = watch('email')

    const handleSubmitForm = (values: LoginFormFields) => {
        dispatch(userModel.userActions.login({ email: values.email }))
    }

    useEffect(() => {
        if (!errors.email && email.length > 1) {
            sessionStorage.setItem('email', email)
        } else {
            sessionStorage.removeItem('email')
        }
    }, [errors.email, email])

    const isBtnDisabled = !isValid || !watch('hasAgreement')

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col h-full">
            <FormInput {...register('email')} disabled={step === Steps.two} errorMsg={errors?.email?.message} />

            {step === Steps.one && (
                <>
                    <Checkbox {...register('hasAgreement')} />
                    <ProceedButton disabled={isBtnDisabled} onClick={() => setStep(Steps.two)} />
                </>
            )}

            {step === Steps.two && (
                <div className="flex mt-auto">
                    <button className="btn btn-outlined mt-auto flex-1" onClick={() => setStep(Steps.one)}>
                        Back
                    </button>
                    <button className="btn btn-primary mt-auto flex-1 ml-4" type="submit">
                        Confirm
                    </button>
                </div>
            )}
        </form>
    )
}
