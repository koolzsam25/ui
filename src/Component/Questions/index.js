import React, { useState } from "react";
import {QuestionHeader, QuestionsWrapper, QuestionNumber, QuestionContainer, AnswerContainer, AnswerHeader, Answer} from './styles';
const Questions = ({ totalQuestions, questionIndex, updateOption, questionOption, question }) => {

    const handleChange = (index, checked) => {
        console.log('Clicked', index, checked);
        updateOption(index, checked);
    };

    const getChecked = (questionIndex, optionKey) => {
        return questionOption.get(questionIndex) === optionKey + 1;
    };

    console.log(JSON.stringify(question));
    return (
        <QuestionsWrapper >
            <QuestionNumber>Question {questionIndex}/{totalQuestions}</QuestionNumber>
            <hr className="solid"/>
            <QuestionContainer>
                <QuestionHeader> {question.statement}</QuestionHeader>    
            </QuestionContainer>
            
                    <AnswerContainer>
                        {
                            question.options.map((option, optionKey) => (
                                <AnswerHeader key={questionIndex + '-' + optionKey}>
                                        {/* <input type="checkbox" name={option}
                                            checked={getChecked(questionIndex, optionKey)}
                                            onChange={() => handleChange(questionIndex, optionKey + 1)}
                                        /> */}
                                        <Answer isChecked={getChecked(questionIndex, optionKey)} onClick={() => handleChange(questionIndex, optionKey + 1)}>
                                            {option}
                                        </Answer>
                                         
                                </AnswerHeader>
                            ))
                        }
                        </AnswerContainer>
                <hr className="solid"></hr>
        </QuestionsWrapper>
    )
}
export default Questions;