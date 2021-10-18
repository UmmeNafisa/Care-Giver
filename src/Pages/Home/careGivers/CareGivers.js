import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CareGiverDetails from '../../CareGiverDetails/CareGiverDetails';

const CareGivers = () => {
    const [careGiver, setCareGiver] = useState([])
    useEffect(() => {
        fetch("/careGiver.json")
            .then(res => res.json())
            .then(data => setCareGiver(data))
    }, [])
    console.log(careGiver)
    return (
        <Container className="mb-5">
            <h1 className="text-center">Our CareGivers</h1>
            <h6 className="fst-italic text-muted mb-5 text-center">Our caregivers are trained specifically to provide in-home care.
            </h6>
            <Row xs={2} md={4} lg={4} className="g-0">
                {
                    careGiver.map(cg => <CareGiverDetails
                        key={cg.id} cg={cg}
                    ></CareGiverDetails>)
                }
            </Row>
        </Container>
    );
};

export default CareGivers;