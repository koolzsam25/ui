import React, { Component } from "react";
// import { useState } from "react";
import { Form ,Button,Row,Col} from "react-bootstrap";

// import * as DataContainer from './FetchData';
export class Login extends Component {
    static displayName = Login.name;

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
        // event.preventDefault();
    }

    componentDidMount() {

    }
  
    render() {

        return (
            <div>
                <div>
                    <label>Student Login</label>
                </div>
                <div className="col-sm-4" style={{padding: '10px'}}>
                <Form >
                    <Form.Group size="lg" controlId="email" style={{flexDirection:'row' , margin:'10px'}} >
                    <Row>
                        <Col><Form.Label>Email</Form.Label></Col>
                        <Col><Form.Control autoFocus type="email" onChange={(e) => this.email = e.target.value}/></Col>
                    </Row>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password" style={{flexDirection:'row' , margin:'10px'}}>
                    <Row>
                        <Col><Form.Label>Password</Form.Label></Col>
                        <Col><Form.Control type="password" onChange={(e) => this.password = e.target.value}/> </Col>
                    </Row>
                    </Form.Group>
                    <Button block size="lg" type="submit"  style={{margin:'10px'}}>
                            Login
                    </Button >
                        <a href="/register"  style={{margin:'10px'}}>
                            Register here.
                        </a>
                </Form>
                
                </div>
            </div>

        );       
    }
}





