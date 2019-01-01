import React from 'react';

const ContactInfo = () => {
    return (
        <div className="container">
            <h2 style={{textAlign: 'center'}}><u>Conveners</u></h2>
            <div className="conveners">
                <div className="conveners__head">
                    <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                    <h4>Dr. KS Nayanathara</h4>
                    <h5>Principal</h5>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4 >Dr. HN Lakshmi</h4>
                        <h5>Professor, IT</h5>
                        <h5>CO-CONVENER</h5>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>Dr. Shashidar Kudari</h4>
                        <h5>Professor, Mech</h5>
                        <h5>FACULTY CONVENER</h5>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>DR. N. Narayana</h4>
                        <h5>Professor, Civil</h5>
                        <h5>CO-CONVENER</h5>
                    </div>
                </div>
            </div>

            <h2 style={{textAlign: 'center'}}><u>Student Conveners</u></h2>
            <div className="conveners">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>Saikumar Billakanti</h4>
                        <h5>9959320359</h5>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>Diyya Dasari</h4>
                        <h5>7032676978</h5>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>Naval Kulakarni</h4>
                        <h5>9160428004</h5>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid" src={require('../img/human.png')} height="100" width="100" alt="human"/>
                        <h4>Tanmayee Kodumagulla</h4>
                        <h5>9493045415</h5>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ContactInfo;