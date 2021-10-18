import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-bg mt-5 mb-0">
            <Container className="d-md-flex justify-content-around">
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <div className="care-givers-part">
                            <h3 className="text-white my-5"> Care Givers </h3>
                            <h5 className="text-color">Heath Mart</h5>
                            <p className="text-color">The place we call home is the place that feels most comfortable and secure. A sense of home can become especially important as we age. Our in-home senior care services help ease the challenges of aging while encouraging seniors to enjoy the comforts of home.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-white info ms-5">
                            <h3 className=" text-white my-5">Contact us</h3>
                            <p className="text-color mt-3"> 13323 California St.</p>
                            <p className="text-color">Omaha, NE, 18813</p>
                            <p className="text-color">Tel: 1 (855) 123 780 456</p>
                            <p className="text-color">Email: info@caregivers.com</p>
                        </div>
                    </Col>
                    <Col>
                        <h3 className=" text-white my-5"> Follow us</h3>
                        <div className=" d-flex justify-content-start pe-4 icons">
                            <p><FontAwesomeIcon icon={faFacebook} /></p>
                            <p><FontAwesomeIcon icon={faYoutube} /></p>
                            <p><FontAwesomeIcon icon={faTwitter} /></p>
                            <p><FontAwesomeIcon icon={faInstagram} /></p>
                            <p><FontAwesomeIcon icon={faVoicemail} /></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className="text-center m-0 text-white text-muted"> <span className="text-white">Care Giver </span> © 2021 All rights reserved.</p>
        </div>
    );
};

export default Footer;
