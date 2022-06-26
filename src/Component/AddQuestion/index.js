import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Form,Row,Col,Button ,input,CloseButton} from "react-bootstrap";
import { QuestionContainer, OptionInput,QuestionCloseButtonContainer} from './styles';
const AddQuestion = ({questionIndex}) => {
    const location = useLocation();
    const functionHandler = () => {
        //Propogate questionIndex to parent to delete item from questionIndexes
        // props.ClickHandler(questionIndex);
    }    
    return (
        <>
        <QuestionContainer>
        <div contentEditable={true} suppressContentEditableWarning={true} >Question {questionIndex} statement here
        <QuestionCloseButtonContainer><CloseButton onClick={functionHandler} /></QuestionCloseButtonContainer>
        </div>
        <div>
            <OptionInput type="radio" name="options"></OptionInput>
            <label  contentEditable={true} suppressContentEditableWarning={true} >Option 1</label>
        </div>
        <div>
            <OptionInput type="radio" name="options"></OptionInput>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 2</label>
        </div>
        <div>
            <OptionInput type="radio" name="options"></OptionInput>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 3</label>
        </div>
        <div>
            <OptionInput type="radio" name="options"></OptionInput>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 4</label>
        </div>
        </QuestionContainer>
        </>
    );

}

export default AddQuestion;
