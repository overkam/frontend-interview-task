import { forwardRef } from 'react'

export const Checkbox = forwardRef<HTMLInputElement>(({ ...rest }, ref) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    ref={ref}
                    {...rest}
                />
                <span className="label-text">I agree</span>
            </label>
        </div>
    )
})
