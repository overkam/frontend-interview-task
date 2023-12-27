import { forwardRef } from 'react'

type FormInputProps = {
    errorMsg?: string
    disabled?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ errorMsg, disabled, ...rest }, ref) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input type="text" placeholder="Type here" className="input" ref={ref} disabled={disabled} {...rest} />
            {errorMsg && (
                <div className="label">
                    <span className="label-text-alt text-red-500">{errorMsg}</span>
                </div>
            )}
        </label>
    )
})
