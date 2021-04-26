import React from 'react';
import '../styles/not-found.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scarecrow from '../assets/Scarecrow.png';

function NotFound() {
    return <div className="col-lg-12">
        <div className="col-lg-12 " id="header">
            <label >404 NOT FOUND</label>
        </div>
        <div id="main" className="row">
            <div className="col-lg-6" id="scare">
                <img src={Scarecrow} alt="Scarecrow" id="scarecrow"/>
            </div>
            <div className="col-lg-6">
                <div className="pl-4 mt-3"  id="alert">
                    <p>
                        I have bad news for your
                    </p>
                </div>
                <div className="pl-4"  id="message">
                    <p>
                        The page you are looking for might be removed or is 
                        temporarily unavailable
                    </p>
                </div>
                <div className="pl-4"  id="button">
                    <button id="back">
                        BACK TO HOME PAGE
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default NotFound;