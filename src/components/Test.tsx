import React from 'react'
import { data, Data } from '../utils/data'
import { Progressbar } from './Progressbar'

type TestProps = {
    currentQuestion: Data
    onClickVariants: (id: number, answer: string) => void
    step: number
}

export const Test: React.FC<TestProps> = ({ currentQuestion, onClickVariants, step }) => {

    const procent = Math.round(step * 100 / data.length)

    const variants = Object.keys(currentQuestion.options);

    const [selectedVariant, setSelectedVariant] = React.useState<string | null>(null);

    React.useEffect(() => {
        setSelectedVariant(null);
    }, [currentQuestion]);

    const handleVariantClick = (id: number, variant: string) => {
        setSelectedVariant(variant);
        onClickVariants(id, variant);
    };

    return <>
        <h2 className="title">Тестирование</h2>
        <div className='test'>
            <h3 className="test-title">{currentQuestion.question}</h3>
            <ul>{
                variants.map((item, index) =>
                    <li className='test-variant' key={index}>
                        <label htmlFor={item}>
                            <input
                                id={item}
                                type="radio"
                                name={`answer-${currentQuestion.id}`}
                                checked={selectedVariant === item}
                                onChange={() => handleVariantClick(currentQuestion.id, item)}
                            />
                            <span className='custom-radio'></span>
                            {item}
                        </label>
                    </li>)
            }</ul>
        </div>
        <Progressbar min={0} max={data.length} procent={procent} currentQuestion={step} />
    </>
}