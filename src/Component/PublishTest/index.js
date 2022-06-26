import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Form,Row,Col,Button } from "react-bootstrap";
import AddQuestion from '../../Component/AddQuestion'
import {SubmitButton, AddButton, OuterDiv, FormGroup} from './styles';
const PublishTest = (role) => {
    const location = useLocation();
    const [questionIndexes, setQuestionIndexes] = useState([1]);
    const [childData, setChildData] = useState("");
    const QuestionPaperDifficulty = [
        { value: 'Easy', label: 'Easy' },
        { value: 'Difficult', label: 'Difficult' }
      ];
    function AddQuestions()
    {
        let newarray = questionIndexes;
        newarray.push(questionIndexes.length+1);
        setQuestionIndexes([...newarray]);
    };
    return (
        <>
        <form action="" method="post" id="start-form">
            <OuterDiv className="col-sm-6">
            <FormGroup size="lg" controlId="TestName">
                            <Row>
                            <Col><Form.Label>Test name </Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                            /></Col>
                            </Row>
            </FormGroup>
            <FormGroup size="lg" controlId="TimeLimit" >
                            <Row>
                            <Col><Form.Label>Time Limit (Mins) </Form.Label></Col>
                            <Col><Form.Control
                                type="number"
                            /></Col>
                            </Row>
            </FormGroup>
            <FormGroup size="lg" controlId="NoOfQues" >
                            <Row>
                            <Col><Form.Label>Number of Questions </Form.Label></Col>
                            <Col><Form.Control
                                type="number"
                            /></Col>
                            </Row>
            </FormGroup>
            <FormGroup size="lg" controlId="DifficultLevel">
                            <Row>
                            <Col><Form.Label>Difficulty Level</Form.Label></Col>
                            <Col><Form.Select >
                                {/* Bind to QuestionPaperDifficulty */}
                                <option value="Easy">Easy</option>
                                <option value="Difficult">Difficult</option>
                                </Form.Select>
                                </Col>
                            </Row>
            </FormGroup>
            <FormGroup size="lg" controlId="QuestionType">
                            <Row>
                            <Col><Form.Label>Question Paper Type</Form.Label></Col>
                            <Col><Form.Select >
                                <option value="MCQ">MCQ</option>
                                </Form.Select>
                                </Col>
                            </Row>
            </FormGroup>
            <AddButton onClick={AddQuestions}>Add Questions</AddButton>
            {
             questionIndexes.map((index) =>(
                <AddQuestion questionIndex={index} ClickHandler = {setChildData}></AddQuestion>
            ))
            }
            
            <SubmitButton block  type="submit" >
                            Submit
            </SubmitButton>
            </OuterDiv>

        </form></>

    );

}

export default PublishTest;

