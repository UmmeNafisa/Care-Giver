import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (prop) => {
    const { id, serviceName, imgUrl, description } = prop.service;
    return (
        <Col className="h-100">
            <Card className="card bg-dark text-white border-0">
                <Card.Img className="card-images" src={imgUrl} alt="Card image" />
                <Card.ImgOverlay className="mt-5">
                    <Card.Title className="fw-bold fs-3">{serviceName}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 58)}.....
                    </Card.Text>
                    <Link to={`/booking/${id}`}>
                        <Button className="btn btn-info btn-hover text-white"> LEARN MORE </Button>
                    </Link>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Service;