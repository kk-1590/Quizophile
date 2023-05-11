import './Quiz.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Question from '../../components/Question/Question';

function Quiz({ name,score,questions,setQuestions,setScore }) {

  const [options, setoptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setoptions(
      questions && 
      handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers
      ])
    );
  }, [questions,currQues]);

  console.log(options);

  const handleShuffle = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = options[i];
      options[i] = options[j];
      options[j] = temp;
    }
    return options;
  }

  return (
    <div className='quiz'>
      <span className='subtitle'>
          Welcome, {name}
      </span>

      {
        questions ? (
          <>
            <div className='quizInfo'>
                <span>{questions[currQues].category}</span>
                <span>Score : {score}</span>
            </div>

            <Question 
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
          ) : ( 
            <CircularProgress 
              style={{margin: 100}}
              color = 'inherit'
              size={150}
              thickness={1} 
        />
      )}
    </div>
  )
}

export default Quiz