import React from 'react'

type ProgressbarProps = {
    min: number
    max: number
    procent: number
    currentQuestion: number
}

export const Progressbar: React.FC<ProgressbarProps> = ({ max, min, procent, currentQuestion }) => {
    return <>
        <div className="questions">
            <span className="questions-min">{min}</span>
            <span className="questions-max">{max}</span>
        </div>
        <div className="progressbar">
            <div className="progress" style={{ width: `${procent}%` }}>
                <span className="progress-count">{currentQuestion}</span>
            </div>
        </div>
    </>
}