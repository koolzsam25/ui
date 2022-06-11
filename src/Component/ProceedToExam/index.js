import React, { useState } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import { Card, Stack } from "react-bootstrap";
import { getStudentDetails,getExamDetails } from '../../utility/examService';
import {ExamsFooter,ThisisMeButton,StartExamCard,CardText,ExamLoginImage,ExamStackPanel, OuterDiv, ExamInformation} from './styles';
const ProceedToExam = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    function GotoQuestionPaper()
    {
        navigate(`/questionPaper`,{ state: {examId:state.examId}});
    };
    return (
    <div>
        <ExamInformation>Exam Information</ExamInformation>
        
        <OuterDiv className="bg-light border z-depth-5">
        {/* <ExamStackPanel direction="verticle" className="btg-ligh" gap={3}>
                <h6>Exam Name: {getExamDetails(state.examId).Name}</h6>
                <h6>Start time: {getExamDetails(state.examId).Start}</h6>
                <h6>No of Questions: {getExamDetails(state.examId).NoOfQuestions}</h6>
                <h6>Duration: {getExamDetails(state.examId).Duration}</h6>
        </ExamStackPanel> */}
        </OuterDiv> 
        <div className="ms-auto">
            <StartExamCard>
                <div style={{ margin: 'auto'}}>
                <CardText>Please verify exam details</CardText>
                <Card.Body>
                    {/* <ExamLoginImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57cxS-wC2GujcEE-N_c5epmqhydszCHIk1Q&usqp=CAU" rounded/> */}
                    <Card.Text>Name: {getStudentDetails("2")?.Name}</Card.Text>
                    <Card.Text>Id: {getStudentDetails("2")?.Id}</Card.Text>
                    <Card.Text>Exam Name: {getExamDetails(state.examId).Name}</Card.Text>
                    <Card.Text>Start time: {getExamDetails(state.examId).Start}</Card.Text>
                    <Card.Text>No of Questions: {getExamDetails(state.examId).NoOfQuestions}</Card.Text>
                    <Card.Text>Duration: {getExamDetails(state.examId).Duration}</Card.Text>
                    <ExamsFooter>
                        <ThisisMeButton onClick={GotoQuestionPaper}>Start Test</ThisisMeButton>
                    </ExamsFooter>
                </Card.Body>
                </div>
             </StartExamCard>
        </div>
  </div>
    );
}
export default ProceedToExam;
