import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Feedback.css'

const Feedback = () => {
    return (
        <div className="feedback-bg">
            <div className="ms-5 feedback-caption">

                <h1 className="text-white fw-bolder">Share Your Cares. Inspire Others.</h1>
                <h3 className="text-white w-50 mt-3 mb-5">Join our movement to make the world a better place for seniors.</h3>
                <Link to='/feedbackDetails'> <Button className="btn btn-info btn-hover text-white"> LEAVE FEEDBACK </Button> </Link>

            </div>
        </div>
    );
};

export default Feedback;