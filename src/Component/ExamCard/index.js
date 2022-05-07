import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button,Modal } from "react-bootstrap";
import { students,scores } from '../../utility/Data';
import { isExamOver,getStudentResult,getStudentName,getTimeRemaining } from '../../utility/examService';
import {DownloadCertificate, ResultTitle, ExamTitle} from './styles';
const ExamCard = ({examData}) => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const pastExam = isExamOver(examData.Expiry) ;
    console.log("## ", JSON.stringify(location));
    const handleCloseResult = () => setShow(false);
    const handleShowResult = () => setShow(true);
    return (
        <div>
        <Card style={{ width: '18rem',borderRadius:'5px', margin:'5px' }}>
        <ExamTitle ispastexam={pastExam}>{examData.Name}</ExamTitle>
        <Card.Body style={{ alignItems:'left'}}>
            <Card.Text>Start : {examData.Start}</Card.Text>
            <Card.Text>Expire : {examData.Expiry}</Card.Text>
            <Card.Text>No Of Questions : {examData.NoOfQuestions}</Card.Text>
            <Card.Text>Exam Duration : {examData.Duration}</Card.Text>
            {!pastExam &&<Card.Text>Time Remaining : {getTimeRemaining(examData.Expiry)}</Card.Text>}
            <Card.Footer style={{ backgroundColor:'white'}}>
                {pastExam &&<Button style={{ backgroundColor:'teal', width:'100px', margin:'5px' }} onClick={handleShowResult}>Result</Button>}
                {!pastExam &&<Button style={{ backgroundColor:'forestgreen', width:'100px', margin:'5px' }}>Proceed</Button>}
            </Card.Footer>
        </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleCloseResult}>
    <Modal.Header closeButton>
      <ResultTitle >Result</ResultTitle>
    </Modal.Header>
    <Modal.Body>Student : {getStudentName(students,"2")}</Modal.Body>
    <Modal.Body>Percentage : {getStudentResult(scores,"2",examData.Id)}%</Modal.Body>
    <Modal.Footer>
        <DownloadCertificate variant="primary" onClick={handleCloseResult}>Download Certificate</DownloadCertificate>
        <Button style={{ backgroundColor:'teal', margin:'5px' }} variant="primary" onClick={handleCloseResult}>Close</Button>
    </Modal.Footer>
  </Modal>
  </div>
    );
}
export default ExamCard;