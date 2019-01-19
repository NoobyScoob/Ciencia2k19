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
                        <div className="col-md-7">
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
                            <h2 style={{textAlign: 'center'}}>Important Links</h2>
                            <div className="imp__links">
                                <div className="imp">
                                    <h5>Project Demo Competition</h5>
                                    <p>Maximum Team Participation - 3 members.</p>
                                    <a style={{margin: '0.4rem 0'}} href="https://docs.google.com/forms/d/e/1FAIpQLSfLIN5Di3Ub2i_vkV1HAg3On7Ktpt9UTxhGIME_07Ic64Vq5A/viewform" className="btn btn-dark">Participate</a>
                                </div>
                                <div className="imp">
                                    <h5>Marathon 5K Run</h5>
                                    <p>Venue: Jalvihar on 20th January 2k19</p>
                                </div>
                                <div className="imp">
                                    <h5>Flash Mob</h5>
                                    <p>next galleria mall, 18th January 2k19</p>
                                </div>
                            </div>
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