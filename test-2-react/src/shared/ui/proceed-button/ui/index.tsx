import { useEffect, useState } from 'react'

type ProceedButtonProps = {
    disabled: boolean
    onClick: () => void
    endTime?: number
    changeTime?: number
}

export function ProceedButton({ disabled, onClick, endTime = 500, changeTime = 10 }: ProceedButtonProps) {
    const [time, setTime] = useState(0)
    const [isHolding, setIsHolding] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if ((time >= 0 && time < endTime && isHolding) || (time > 0 && time <= endTime && !isHolding)) {
            timeout = setTimeout(
                () => setTime((prevTime) => (isHolding ? prevTime + changeTime : prevTime - changeTime)),
                changeTime
            )
        }
        return () => clearTimeout(timeout)
    })

    useEffect(() => {
        if (time === endTime) {
            onClick()
        }
    }, [time, endTime])

    return (
        <button
            className="btn btn-primary mt-auto w-full"
            disabled={disabled}
            onMouseDown={() => setIsHolding(true)}
            onMouseUp={() => setIsHolding(false)}
            onClick={(event) => event.preventDefault()}
        >
            {time ? `${time} millisec` : 'Hold to proceed'}
        </button>
    )
}
