import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'What is React?',
    variants: ['Library', 'Framework', 'App'],
    correct: 0,
  },
  {
    title: 'What is a component? ',
    variants: ['App', 'Part of an application or page', 'Not sure'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'This is an HTML',
      'This is a function',
      'This is HTML, with JS-code inside',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img alt = "party" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers out of {questions.length}</h2>
      <a href ='/' >
      <button>Try again</button>
      </a>
    </div>
  );
}

function Game({question, onClickVariant, step}) {
  const percentage = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
          <li key = {text} onClick = {() => onClickVariant(index)}>{text}</li>))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
     console.log(step, index);
     setStep(step + 1);
     if(index === question.correct){
      setCorrect(correct + 1)
     }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question = {question} onClickVariant = {onClickVariant}/>:
        <Result correct = {correct} />  }

    </div>
  );
}

export default App;
