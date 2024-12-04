import React from 'react'
import { data } from '../utils/data'
import { ResultInfo } from './ResultInfo'

type ResultProps = {
    answers: { [key: number]: string }
}

let correctedAnswer = 0;

export const Result: React.FC<ResultProps> = ({ answers }) => {

    const answersArray = Object.entries(answers)

    for (const item of data) {
        const id = item.id;
        for (const answer of answersArray) {
            if (id === Number(answer[0]) && item.options[answer[1]]) {
                correctedAnswer++;
            }
        }
    }

    return <>
        {/* ======= INFO TEXT ======= */}
        {correctedAnswer === data.length ?
            <ResultInfo title={'Поздравляем!'} text={'Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT.'} />
            :
            correctedAnswer === 0 ?
                <ResultInfo title={'Упс :('} text={'Вы неправильно ответили на все вопросы.  Нужно подучить теорию.'} />
                :
                <ResultInfo title={'Хороший результат!'} text={`Вы ответили правильно на ${correctedAnswer} вопросов. Так держать!`} />
        }

        {/* ======= LIST ANSWERS ======= */}
        <ul className='cards'>
            {
                data.map(item => {
                    const classAnswer = item.options[answers[item.id]] ? 'card-answer-correct' : 'card-answer-wrong';
                    return <li key={item.id} className={`card-answer ${classAnswer}`}>
                        <h4 className="question">{item.question}</h4>
                        <span className="answer">{answers[item.id]}</span>
                    </li>
                })
            }
        </ul>

        {correctedAnswer !== data.length && (<a className='again' href='/'><button className='again-btn'>Пройти еще раз</button></a>)}

    </>
}