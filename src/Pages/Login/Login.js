import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../Images/login.png'
import './login.css'
import { Col, Row } from 'react-bootstrap';



const Login = ({ login }) => {
    const { error, users, isLoading, signInUsingGoogle, handleEmail, handlePassword,
        handleSubmitBtn } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async data => {
        await login(data.email, data.password);
        reset();
    };
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirect_url);
        })
    }
    return (
        <div className="div d-flex justify-content-center align-items-center login-bg">
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <div>
                        <div className="form-input mt-5 text-center">
                            <FontAwesomeIcon className="user-icon rounded-circle" icon={faUser} />
                            <h3 className="text-white my-3"> Client Login </h3>
                            <input
                                onChange={handleEmail}
                                className="mt-2 p-2 form-control border-0 border-bottom rounded-pill"
                                type="email"
                                placeholder="Email ID"
                                required
                            />
                            <br />
                            <input
                                onChange={handlePassword}
                                className="mt-2 p-2 form-control border-0 border-bottom rounded-pill"
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <br />
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <input onClick={handleSubmitBtn} className="btn btn-primary fs-5 my-3 rounded-pill px-5" type="submit" value="Login" />
                            </div>
                            <br />
                            <p> New client to Care Giver? <Link className="text-white" to="/register"> Please Register </Link> </p>

                            <div> ------------------ or ------------------ </div>
                            <div className="my-3 mb-5">
                                <h5 className="mb-4"> Sign in  Using </h5>
                                <button className="icon-bg text-danger fs-4 rounded-circle px-2 border-0 me-3"><FontAwesomeIcon icon={faGoogle} onClick={signInUsingGoogle} /></button>
                                <button className="icon-bg text-primary fs-4 rounded-circle px-2 border-0 me-3 "><FontAwesomeIcon icon={faFacebook} /></button>
                                <button className="icon-bg text-dark fs-4 rounded-circle px-2 border-0 "><FontAwesomeIcon icon={faGithub} /></button>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col>
                    <div className="right-side-image">
                        <img
                            className="img-fluid"
                            src={loginImg}
                            alt="loginImg"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;