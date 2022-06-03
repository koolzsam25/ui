import React, { useState } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import { Card, Stack } from "react-bootstrap";
import { getStudentDetails,getExamDetails } from '../../utility/examService';
import {ExamsFooter,ThisisMeButton,StartExamCard,CardText,ExamLoginImage,ExamStackPanel, OuterDiv} from './styles';
const ProceedToExam = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    function GotoQuestionPaper()
    {
        navigate(`/questionPaper`,{ state: {examId:state.examId}});
    };
    return (
    <div>
        <h1>Exam Information</h1>
        
        <OuterDiv className="bg-light border z-depth-5">
        <ExamStackPanel direction="verticle" className="btg-ligh" gap={3}>
                <h6>Exam Name: {getExamDetails(state.examId).Name}</h6>
                <h6>Start time: {getExamDetails(state.examId).Start}</h6>
                <h6>No of Questions: {getExamDetails(state.examId).NoOfQuestions}</h6>
                <h6>Duration: {getExamDetails(state.examId).Duration}</h6>
        </ExamStackPanel>
        </OuterDiv> 
        <div className="ms-auto">
            <StartExamCard>
                <CardText>Please verify your details</CardText>
                <Card.Body>
                    <ExamLoginImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57cxS-wC2GujcEE-N_c5epmqhydszCHIk1Q&usqp=CAU" rounded/>
                    <Card.Text>Name: {getStudentDetails("2")?.Name}</Card.Text>
                    <Card.Text>Id: {getStudentDetails("2")?.Id}</Card.Text>
                    <ExamsFooter>
                        <ThisisMeButton onClick={GotoQuestionPaper}>This is Me</ThisisMeButton>
                    </ExamsFooter>
                </Card.Body>
             </StartExamCard>
        </div>
  </div>
    );
}
export default ProceedToExam;
