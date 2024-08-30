import { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Container
            fluid 
            className="
                bg-dark
                text-white
                min-vh-100
                px-4"
        >
            <Row className="
                d-flex
                justify-content-center
                align-items-center"
            >
                <Col className="
                    min-vh-100
                    d-flex
                    flex-column
                    text-center
                    justify-content-evenly
                    align-items-strech"
                    style={{ maxWidth: '600px' }}
                >
                    {/* Logo */}
                    <Container>
                        <img
                            src="devmtn.png"
                            alt="Logo"
                            className="mt-4"
                            style={{ width: '100px' }}
                        />
                        <h2 >Expense Tracker</h2>
                        <p className='mt-4'>Please login to your account</p>
                    </Container>
                    {/* Login Form */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group 
                            className="mb-4"
                            controlId="formBasicEmail"
                        >
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group 
                            className="mb-4"
                            controlId="formBasicPassword"
                        >
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button 
                            variant="primary"
                            type="submit"
                            size='lg'
                        >
                            Login
                        </Button>
                    </Form>
                    {/* Sign Up Link */}
                    <Container
                        fluid
                        className='
                            d-flex
                            flex-column
                            justify-content-between
                            align-items-center
                            p-0
                            mb-5'
                    >
                        {/* Remember Me and Forgot Password */}
                        <Container 
                            className='
                                d-flex
                                flex-row
                                flex-wrap
                                justify-content-between
                                align-items-stretch
                                p-0
                                mb-4'
                        >
                            <Form.Check
                                type="checkbox"
                                label="Remember me"
                            />
                            <a href='#'>Forgot password?</a>
                        </Container>
                        <p>Don't have an account? </p>
                        <Button 
                            variant='outline-primary'
                            type='submit'
                            size='lg'
                        >
                            Sign Up
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
