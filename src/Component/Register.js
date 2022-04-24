import React, { Component } from "react";
import { useState } from "react";
import { Form,Row,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

//import * as DataContainer from "./FetchData";
export class Register extends Component {
    static displayName = Register.name;

    constructor(props) {
        super(props);

        this.email = "";
        this.password = "";

        this.state = {
            datactrl: [],
        };
    }

    validateForm() {
        return this.email.length > 0 && this.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <div className="col-sm-4">
                    <Form >
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Register for your account</Form.Label>                            
                        </Form.Group>  
                        <div style={{flexDirection:'row' , margin:'10px' , textAlign:'left'}}>              
                        <Form.Group size="lg" controlId="email" style={{flexDirection:'row' }} >
                            <Row>
                            <Col><Form.Label>Email</Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                                type="email"
                                onChange={(e) => this.email = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="Firstname" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>First name</Form.Label></Col>
                            <Col><Form.Control
                                type="text"
                                onChange={(e) => this.password = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="Lastname" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Last name</Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                                type="text"
                                onChange={(e) => this.email = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="password" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Password</Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                                type="password"
                                onChange={(e) => this.email = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="repassword" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Retype Password</Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                                type="password"
                                onChange={(e) => this.email = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="country" style={{flexDirection:'row' , margin:'10px'}} >
                            <Row>
                            <Col><Form.Label>Country</Form.Label></Col>
                            <Col><Form.Control
                                autoFocus
                                type="text"
                                onChange={(e) => this.email = e.target.value}
                            /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group size="lg" controlId="accept">
                            <Form.Check type="checkbox" label="I have read and accept the terms and conditions" />
                            <Form.Label></Form.Label>
                        </Form.Group>
                        <Button block size="lg" type="submit">
                            Register
                    </Button>
                    </div>
                    </Form>
                
                </div>    
            </div>

        );
    }
}
