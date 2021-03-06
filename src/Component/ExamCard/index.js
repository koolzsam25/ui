import React, { useState } from 'react';

import { useNavigate  } from 'react-router-dom';
import { Card, Modal } from "react-bootstrap";
import { scores } from '../../utility/Data';
import { isExamOver,getStudentResult,getStudentDetails,getTimeRemaining } from '../../utility/examService';
import { CloseButton, ResultTitle, ExamTitle, ExamsCard, ResultButton, ProceedButton, ExamsFooter} from './styles';
const ExamCard = ({examData}) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const pastExam = isExamOver(examData.Expiry);
    const handleCloseResult = () => setShow(false);
    const handleShowResult = () => setShow(true);
    function GotoProceedExamPage()
    {
        navigate(`/proceedToExam`,{ state: {examId:examData.Id}});
    };
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
                {!pastExam &&<ProceedButton onClick={GotoProceedExamPage} >Proceed</ProceedButton>}
            </ExamsFooter>
        </Card.Body>
    </ExamsCard>
    
     <Modal show={show} onHide={handleCloseResult}>
        <Modal.Header closeButton>
            <ResultTitle >Result</ResultTitle>
        </Modal.Header>
        <Modal.Body>Student : {getStudentDetails("2")?.Name}</Modal.Body>
        <Modal.Body>Percentage : {getStudentResult(scores,"2",examData.Id)}%</Modal.Body>
        <Modal.Footer>
            <CloseButton variant="primary" onClick={handleCloseResult}>Close</CloseButton>
        </Modal.Footer>
    </Modal>
  </div>
    );
}
export default ExamCard;