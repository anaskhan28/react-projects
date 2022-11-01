import '../App.css';
import React, { useState } from 'react'
import {Questions} from "../helpers/Questions"

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState("");

    const chooseOption = (option)=>{
        setOptionChoosen(option)
    }
  return (
    <div className='quiz'>
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className='questions'>
            <button onClick={()=>{
                chooseOption('optionA')
            }}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>{
                chooseOption('optionB')
            }}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>{
                chooseOption('optionC')
            }}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>{
                chooseOption('optionD')
            }}>{Questions[currentQuestion].optionD}</button>

        </div>
        {optionChoosen}
    </div>
  )
}

export default Quiz
