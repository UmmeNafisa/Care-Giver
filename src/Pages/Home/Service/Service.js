import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './service.css'

const Service = (prop) => {
    const { serviceName, imgUrl, description } = prop.service;
    return (
        <Col className="h-100">
            <Card className="bg-dark text-white border-0">
                <Card.Img className="card-images" src={imgUrl} alt="Card image" />
                <Card.ImgOverlay className="mb-0">
                    <Card.Title className="fw-bold fs-3">{serviceName}</Card.Title>
                    <Card.Text className="description">
                        {description}
                    </Card.Text>
                    <Button className="btn btn-info btn-hover text-white"> LEARN MORE </Button>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Service;