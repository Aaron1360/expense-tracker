import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
    return (
        <Container className="mt-5 min-vh-100 d-flex flex-column" >
            <Row className="justify-content-md-center">
                <Col md="4" className="text-center justify-content-evenly">
                    {/* Logo */}
                    <img 
                        src="devmtn.png"
                        alt="Logo" 
                        className="mb-4" 
                        style={{ width: '100px' }}
                    />
                    
                    {/* Text */}
                    <h2>Expense Tracker</h2>
                    <p>Please login to your account</p>

                    {/* Login Form */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control type="email" placeholder="Username" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control type="password" placeholder="Password" />
                            </InputGroup>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {/* Remember Me and Forgot Password */}
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <Form.Check 
                            type="checkbox" 
                            label="Remember me" 
                            // className="d-flex"
                            style={{ textAlign: 'left', gap: '0.5rem' }} 
                        />
                        <a href="#">Forgot password?</a>
                    </div>
                    {/* Sign Up Link */}
                    <p className="mt-3">Don't have an account? </p>
                    <Button variant='outline-primary' type='submit'>
                        Sign Up
                    </Button>

                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
