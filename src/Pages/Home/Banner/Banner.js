import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../Images/banners/Slider1.jpg'
import banner2 from '../../../Images/banners/Slider2.jpg'
import banner3 from '../../../Images/banners/Slider3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade className="">
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Container fluid>
                        <Row>
                            <Col className="text-start mb-5" lg={8}>
                                <h1>You can't always be there.</h1>
                                <h1>But we can.</h1>
                                <p className=""> CareGivers offers an individualized approach to keep seniors safe and sound at home, instead of anywhere else</p>
                                <button className="btn btn-info text-white btn-hover">OUR CARE SERVICES </button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Container fluid>
                        <Row>
                            <Col className="text-start mb-5" lg={8}>
                                <h1>We give seniors the love they deserve. </h1>
                                <p className=""> CareGivers offers an individualized approach to keep seniors safe and sound at home, instead of anywhere else</p>
                                <button className="btn btn-info text-white btn-hover">OUR CARE SERVICES </button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Container fluid>
                        <Row>
                            <Col className="text-start mb-5" lg={8}>
                                <h1>Let's enrich the lives of seniors with kindness and joy!</h1>
                                <p className=""> CareGivers offers an individualized approach to keep seniors safe and sound at home, instead of anywhere else</p>
                                <button className="btn btn-info text-white btn-hover">OUR CARE SERVICES </button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;