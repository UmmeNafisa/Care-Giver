import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Button, Container } from 'react-bootstrap';

const Appoinment = () => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }


    return (
        <Container className="text-center">
            <h1 className="mt-5 mb-3 text-info"> Book the Appointment</h1>
            <div className=" text-center">
                <h4 className="mb-3">   {moment(dateState).format('MMMM Do YYYY')}</h4>
                <Calendar className="mx-auto "
                    value={dateState}
                    onChange={changeDate}
                />
            </div>
            <div className="from-control mt-3">
                <label htmlFor="time" className="fw-bold fs-5"> Your Preferable Time : </label>
                <input type="time" name="time" id="time" />
            </div>
            <br />
            <Button className="mt-2 mb-5 btn btn-info px-5"> Book it  </Button>
        </Container>
    );
};

export default Appoinment;