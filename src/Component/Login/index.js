import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        if(!validateForm()){
            console.log("Please provide valid email/password");
        }
        // event.preventDefault();
    }

    return (
        <div>
            <div>
                <label>Student Login</label>
            </div>
            <div className="col-sm-4" style={{ padding: '10px' }}>
                <Form >
                    <Form.Group size="lg" controlId="email" style={{ flexDirection: 'row', margin: '10px' }} >
                        <Row>
                            <Col><Form.Label>Email</Form.Label></Col>
                            <Col><Form.Control autoFocus type="email" onChange={(e) => setEmail(e.target.value)} /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password" style={{ flexDirection: 'row', margin: '10px' }}>
                        <Row>
                            <Col><Form.Label>Password</Form.Label></Col>
                            <Col><Form.Control type="password" onChange={(e) => setPassword(e.target.value)} /> </Col>
                        </Row>
                    </Form.Group>
                    <Button block size="lg" type="submit" style={{ margin: '10px' }} onClick={handleSubmit}>
                        Login
                    </Button >
                    <a href="/register" style={{ margin: '10px' }}>
                        Register here.
                    </a>
                </Form>

            </div>
        </div>

    );

}

export default Login;