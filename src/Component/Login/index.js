import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { STUDENT } from '../../utility/constants';
import { loginUser } from '../../service/loginService';
import { useLocation } from 'react-router-dom';
import {saveToken, saveRole} from '../../utility/login';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("## LOGIN ", JSON.stringify(location));
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("## LOGIN Inside submit ");
        if (!validateForm()) {
            console.log("Please provide valid email/password");
        }
        const token = await loginUser({
            email,
            password
        });
        saveRole(token.role);
        saveToken(token);
        console.log("## LOGIN Inside Student Login ");
        navigate('/dashboard', { state: STUDENT });

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
                    <Button block size="lg" type="submit" style={{ margin: '10px' }} onClick={(e) => { handleSubmit(e) }}>
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