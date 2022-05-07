import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

const ExamCard = ({examData}) => {
    const location = useLocation();
    const pastExam = IsExamOver();
    console.log("## ", JSON.stringify(location));

    function IsExamOver() {
        return new Date() > new Date(examData.Expiry);
    }
    //to-do need work to return in hour , min and sec format 
    function getTimeRemaining() {
        const diffInMs = Math.round(new Date(examData.Expiry) - new Date());
        return diffInMs / (1000 * 60 * 60);
    }
    let titleStyle= {
            borderRadius:'5px', backgroundColor: 'teal' , height:'35px', fontWeight:'bold', paddingTop:'5px' , color:'white'
    }
    if(!pastExam){
        titleStyle= {
            borderRadius:'5px', backgroundColor: 'forestgreen' , height:'35px', fontWeight:'bold', paddingTop:'5px' , color:'white'
        }
    }
    return (
        <Card style={{ width: '18rem',borderRadius:'5px', margin:'5px' }}>
        <Card.Title style={titleStyle}>{examData.Name}</Card.Title>
        <Card.Body style={{ alignItems:'left'}}>
            <Card.Text>Start : {examData.Start}</Card.Text>
            <Card.Text>Expire : {examData.Expiry}</Card.Text>
            <Card.Text>No Of Questions : {examData.NoOfQuestions}</Card.Text>
            <Card.Text>Exam Duration : {examData.Duration}</Card.Text>
            {!pastExam &&<Card.Text>Time Remaining : {getTimeRemaining()}</Card.Text>}
            <Card.Footer style={{ backgroundColor:'white'}}>
                {pastExam &&<Button style={{ backgroundColor:'teal', width:'100px', margin:'5px' }}>Result</Button>}
                {!pastExam &&<Button style={{ backgroundColor:'forestgreen', width:'100px', margin:'5px' }}>Proceed</Button>}
            </Card.Footer>
        </Card.Body>
    </Card>
    );
}
export default ExamCard;