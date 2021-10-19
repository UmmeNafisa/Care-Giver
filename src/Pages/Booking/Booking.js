import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Booking = () => {
    const { serviceId } = useParams();
    const newId = serviceId - 1;

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("/servicesFakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <Container >
            <div className="d-lg-flex my-5">
                <div className="px-5">
                    <img src={data[newId]?.imgUrl} alt="" />
                </div>
                <div className="px-5">
                    <h3> {data[newId]?.serviceName} </h3>
                    <h6 className="w-50"> {data[newId]?.description}</h6>
                    <h5> Total Amount of package will be around <span className="text-danger"> $240 </span> per month </h5>
                    <h4> Package Includes: </h4>
                    <li> 24Hr/7 Days Support </li>
                    <li> Personal Care </li>
                    <li> Elderly Care Service </li>
                    <li> Assisted Living</li>
                </div>
            </div>

            <div>
                <h6> For more information and package details you can call us @ Tel: 1 (855) 123 780 456  <span className="text-primary"> OR </span> </h6>

                <h6> Visit Our Office: 13323 California St.

                    Omaha, NE, 18813</h6>
            </div>

            <Link to="/appoinment"> <Button className="btn btn-info mb-5 mt-3"> BOOK AN APPOINMENT </Button> </Link >
        </Container >
    );
};

export default Booking;