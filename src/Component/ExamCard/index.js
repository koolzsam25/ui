import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Modal } from "react-bootstrap";
import { students,scores } from '../../utility/Data';
import { isExamOver,getStudentResult,getStudentName,getTimeRemaining } from '../../utility/examService';
import {CloseButton, ResultTitle, ExamTitle, ExamsCard, ResultButton, ProceedButton, ExamsFooter} from './styles';
const ExamCard = ({examData}) => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const pastExam = isExamOver(examData.Expiry) ;
    const handleCloseResult = () => setShow(false);
    const handleShowResult = () => setShow(true);
    return (
        <div>
        <ExamsCard>
        <ExamTitle ispastexam={pastExam.toString()}>{examData.Name}</ExamTitle>
        <Card.Body>
            <Card.Text>Start : {examData.Start}</Card.Text>
            <Card.Text>Expire : {examData.Expiry}</Card.Text>
            <Card.Text>No Of Questions : {examData.NoOfQuestions}</Card.Text>
            <Card.Text>Exam Duration : {examData.Duration}</Card.Text>
            {!pastExam &&<Card.Text>Time Remaining : {getTimeRemaining(examData.Expiry)} Days</Card.Text>}
            <ExamsFooter>
                {pastExam &&<ResultButton onClick={handleShowResult}>Result</ResultButton>}
                {!pastExam &&<ProceedButton>Proceed</ProceedButton>}
            </ExamsFooter>
        </Card.Body>
    </ExamsCard>
    
    <Modal show={show} onHide={handleCloseResult}>
    <Modal.Header closeButton>
      <ResultTitle >Result</ResultTitle>
    </Modal.Header>
    <Modal.Body>Student : {getStudentName(students,"2")}</Modal.Body>
    <Modal.Body>Percentage : {getStudentResult(scores,"2",examData.Id)}%</Modal.Body>
    <Modal.Footer>
        <CloseButton variant="primary" onClick={handleCloseResult}>Close</CloseButton>
    </Modal.Footer>
  </Modal>
  </div>
    );
}
export default ExamCard;