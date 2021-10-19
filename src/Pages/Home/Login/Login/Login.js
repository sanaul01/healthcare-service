import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');

    const handleEmailChange = e =>{
        setUserEmail(e.target.value)
    };
    const handlePasswordChange = e =>{
        setUserPassword(e.target.value)
    }

    const handleRegistration = e =>{
        console.log(email, password);
        e.preventDefault();
    }

    const {signInUsingGoogle} = useAuth();

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-form">
            <div className="mx-5 col-sm-6">
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            {/* Google sign in prossess */}
            <h2>Please login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google sign in</button>
        </div>
    );
};

export default Login;