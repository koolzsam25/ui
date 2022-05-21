import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Modal, Stack } from "react-bootstrap";
import { scores } from '../../utility/Data';
import { isExamOver, getStudentResult, getStudentDetails, getTimeRemaining } from '../../utility/examService';
import {
    CloseButton, ResultTitle, ExamTitle, ExamsCard, ResultButton, ProceedButton,
    ExamsFooter, ThisisMeButton, StartExamCard, CardTitle, ExamLoginImage, ExamStackPanel, ExamsBody
} from './styles';
const ExamCard = ({ examData }) => {
    const [show, setShow] = useState(false);
    const [showExam, setshowExam] = useState(false);
    const navigate = useNavigate();
    const pastExam = isExamOver(examData.Expiry);
    const handleCloseResult = () => setShow(false);
    const handleShowResult = () => setShow(true);
    const handleCloseExam = () => setshowExam(false);
    const handleShowExam = () => setshowExam(true);
    function GotoQuestionPaper() {
        handleCloseExam();
        navigate(`/questionPaper`);
    };
    return (
        <div>
            <ExamsCard>
                <ExamTitle ispastexam={pastExam.toString()}>{examData.Name}</ExamTitle>
                <ExamsBody>
                    <Card.Text>Start : {examData.Start}</Card.Text>
                    <Card.Text>Expire : {examData.Expiry}</Card.Text>
                    <Card.Text>No Of Questions : {examData.NoOfQuestions}</Card.Text>
                    <Card.Text>Exam Duration : {examData.Duration}</Card.Text>
                    {!pastExam && <Card.Text>Time Remaining : {getTimeRemaining(examData.Expiry)} Days</Card.Text>}
                    <ExamsFooter>
                        {pastExam && <ResultButton onClick={handleShowResult}>Result</ResultButton>}
                        {!pastExam && <ProceedButton onClick={handleShowExam} >Proceed</ProceedButton>}
                    </ExamsFooter>
                </ExamsBody>
            </ExamsCard>

            <Modal show={show} onHide={handleCloseResult}>
                <Modal.Header closeButton>
                    <ResultTitle >Result</ResultTitle>
                </Modal.Header>
                <Modal.Body>Student : {getStudentDetails("2")?.Name}</Modal.Body>
                <Modal.Body>Percentage : {getStudentResult(scores, "2", examData.Id)}%</Modal.Body>
                <Modal.Footer>
                    <CloseButton variant="primary" onClick={handleCloseResult}>Close</CloseButton>
                </Modal.Footer>
            </Modal>

            <Modal show={showExam} onHide={handleCloseExam}
                size="lg"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title >
                        Exam Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="bg-light border z-depth-5">
                        <Stack direction="horizontal">
                            <ExamStackPanel direction="verticle" className="btg-ligh" gap={3}>
                                <h6>Exam Name: {examData.Name}</h6>
                                <h6>Start time: {examData.Start}</h6>
                                <h6>No of Questions: {examData.NoOfQuestions}</h6>
                                <h6>Duration: {examData.Duration}</h6>
                            </ExamStackPanel>
                            <div className="ms-auto">
                                <StartExamCard>
                                    <CardTitle>Please verify your details</CardTitle>
                                    <Card.Body>
                                        <ExamLoginImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57cxS-wC2GujcEE-N_c5epmqhydszCHIk1Q&usqp=CAU" rounded />
                                        <Card.Text>Name: {getStudentDetails("2")?.Name}</Card.Text>
                                        <Card.Text>Id: {getStudentDetails("2")?.Id}</Card.Text>
                                        <ExamsFooter>
                                            <ThisisMeButton onClick={GotoQuestionPaper}>This is Me</ThisisMeButton>
                                        </ExamsFooter>
                                    </Card.Body>
                                </StartExamCard>
                            </div>
                        </Stack>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default ExamCard;