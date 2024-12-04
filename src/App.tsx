import React from 'react';
import { data } from './utils/data'
import { Test } from './components/Test';
import { Result } from './components/Result';

function App() {

  const [answers, setAnswers] = React.useState<{ [key: number]: string }>({})
  const [step, setStep] = React.useState(0);

  const currentQuestion = data[step];

  const onClickVariants = (id: number, answer: string) => {
    setTimeout(() => {
      setAnswers({ ...answers, [id]: answer })
      setStep(step + 1)
    }, 1000)
  }

  return <main className="container">
    {step !== data.length ?
      <Test step={step} currentQuestion={currentQuestion} onClickVariants={onClickVariants} /> :
      <Result answers={answers} />}
  </main>
}

export default App