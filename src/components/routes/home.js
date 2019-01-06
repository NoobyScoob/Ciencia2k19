import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../gallery';
import ContactInfo from '../contactInfo.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container catalog">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={{textAlign:'center'}}>Events</h2>
                            <div className="event__links">
                                <h6 style={{textAlign:'center'}}>Departments</h6>
                                <Link to="/events/departments/cse">CSE</Link>
                                <Link to="/events/departments/it">IT</Link>
                                <Link to="/events/departments/ece">ECE</Link>
                                <Link to="/events/departments/eee">EEE</Link>
                                <Link to="/events/departments/eie">EIE</Link>
                                <Link to="/events/departments/mec">MEC</Link>
                                <Link to="/events/departments/civ">CIV</Link>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 style={{textAlign: 'center'}}>Poster</h2>
                            <img className="img-fluid poster" alt="poster" src={require("../../img/poster.jpg") }/>
                        </div>
                    </div>
                </div>
                <h2 style={{textAlign: 'center'}}>Gallery</h2>
                <Gallery />
                <ContactInfo />
            </div>
        )
    }
}

export default Home;