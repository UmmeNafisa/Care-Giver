import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CareGiverDetails = (prop) => {
    const { name, profession, imgUrl } = prop.cg;
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" className="rounded-3" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {profession}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CareGiverDetails;