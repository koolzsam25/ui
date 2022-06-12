import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Form,Row,Col,Button } from "react-bootstrap";
import AddQuestion from '../../Component/AddQuestion'
const PublishTest = (role) => {
    const location = useLocation();
    const [questionIndexes, setQuestionIndexes] = useState([1]);

    function AddQuestions()
    {
        let newarray = questionIndexes;
        newarray.push(questionIndexes.length+1);
        setQuestionIndexes([...newarray]);
        console.log(questionIndexes);
    };
    return (
        <>
        <form action="" method="post" id="start-form">
            <div className="col-sm-6" style={{flexDirection:'row' , margin:'10px' , textAlign:'left'}}>
            <Form.Group size="lg" controlId="TestName" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Test name </Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                            /></Col>
                            </Row>
            </Form.Group>
            <Form.Group size="lg" controlId="TimeLimit" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Time Limit (Mins) </Form.Label></Col>
                            <Col><Form.Control
                                type="number"
                            /></Col>
                            </Row>
            </Form.Group>
            <Form.Group size="lg" controlId="NoOfQues" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Number of Questions </Form.Label></Col>
                            <Col><Form.Control
                                type="number"
                            /></Col>
                            </Row>
            </Form.Group>
            <Button variant="outline-dark" size="sm" onClick={AddQuestions}>Add Questions</Button>
            {
             questionIndexes.map((q,i) =>(
                <AddQuestion></AddQuestion>
         ))
         }
            
            <Button variant="outline-dark"  block size="lg" type="submit" >
                            Submit Question Paper
            </Button>
            </div>

        </form></>

    );

}

export default PublishTest;

///export default PublishTest;
