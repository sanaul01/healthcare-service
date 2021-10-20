import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const Login = () => {
    const auth = getAuth();
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false)

    // Toggle Login ====
    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    };
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegistration = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at list 6 carecter long')
            return;
        }
        isLogin? processLogin(email, password) : creatNewUser(email, password);
    }
    //  =============LOgin porcess============== 
    const processLogin= (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    };
    //=========== Creat new user =========
    const creatNewUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user
        console.log(user)
        setError('')
        verifyEmail();
    })
    .catch(error =>{
        setError(error.message)
    })
    }
    // ================= Verify Email ============
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result)
        })
    }
    
    //========== Reset Password ==========
    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
                console.log(result)
        })
    }


        // Google sign in prossess 
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-form">
            <div className="mx-5 col-sm-6">
                <h3 className="text-success">Please {isLogin? "Login": "Register"}</h3>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group onChange={toggleLogin} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="text-danger mb-3">{error}</div>
                    <Button variant="warning" type="submit">
                    {isLogin? "Login": "Register"}
                    </Button>
                    <Button className="ms-3 bg-warning text-dark" type="button" onClick={handleResetPassword}>Reset password</Button>
                </Form>
            </div>


            {/* Google sign in prossess */}
            <div className="ms-5 my-5">
                <h2>Login with Google</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;