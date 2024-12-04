import React from 'react'

type ResultInfoProps = {
    title: string
    text: string
}

export const ResultInfo: React.FC<ResultInfoProps> = ({ title, text }) => {
    const filterText = text.split('.').filter((item) => item !== '');
    return <>
        <h2 className='title' style={{ marginTop: '80px' }}>{title}</h2>
        <h6 className="subtitle">
            {filterText.map((sentence, index) => <span key={index}>
                {sentence[sentence.length - 1] === '!' ? sentence : sentence + '.'}
            </span>)}
        </h6>
    </>
}