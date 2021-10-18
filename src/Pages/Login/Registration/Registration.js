import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="login-form" >
            <div >
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="Submit" />
                </form>
                <p> Alraedy have an account ? <Link to="/login"> Log in </Link> </p>

                <div> ----------- or ---------</div>
                <br />
                <button > Sign in with Goggle </button>
            </div>
        </div>
    );

};

export default Registration;