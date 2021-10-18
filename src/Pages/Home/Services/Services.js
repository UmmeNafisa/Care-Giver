import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/servicesFakeData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className="my-5">
            <div className="text-center container mt-5">
                <h2>Explore Our Top Services</h2>
                <p className="text-muted">A dependable, compassionate presence you can trust </p>
                <hr className="horizontal-line mt-2 mb-5 mx-auto" />
            </div>
            <div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id} service={service}
                        ></Service>)
                    }
                </Row>
            </div>

        </Container>
    );
};

export default Services;