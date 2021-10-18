import React from 'react';
import img from '../../Images/404-ill.webp'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <h1 className="text-danger"> Error 404 !</h1>
                <h3>Sorry! Can't Find That Page!</h3>
                <Link to='/home'> <button className="btn btn-info my-2 text-white px-5 rounded-pill"> Back to Home </button> </Link>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;