import React from 'react';
import { Form } from 'react-bootstrap';
import feedbackImg from '../../Images/feedback-img.jpg'
import ReactStars from "react-rating-stars-component";

const FeedbackDetails = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="d-lg-flex justify-content-center align-items-center">
            <div>
                <img className="img-fluid w-75" src={feedbackImg} alt="" />
            </div>
            <div>
                <h2 className="bg-info text-white fw-bold px-3 py-1 mt-3"> Leave your Feedback </h2>
                <h6 className="text-center mb-5"> Your feedback inspires us </h6>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <h6 className='mt-5'>Give Ratings </h6>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    activeColor="#ffd700"
                />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <input className="btn btn-info text-white fs-5 mt-3 mb-5 rounded-pill px-5 w-100 mt-5" type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetails;