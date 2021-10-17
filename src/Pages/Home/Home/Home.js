import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banners/Slider1.jpg'
import banner2 from '../../../Images/banners/Slider2.jpg'
import banner3 from '../../../Images/banners/Slider3.jpg'

const Home = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>You can't always be there.</h1>
                    <h1>But we can.</h1>
                    <p> CareGivers offers an individualized approach to keep seniors safe and sound at home, instead of anywhere else</p>
                    <button className="btn btn-info text-white">OUR CARE SERVICES </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;