import React from 'react';

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="row">
                <div className="col-md-4">
                    <iframe title="map" className="img-fluid" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30491.728947730193!2d78.6067648!3d17.1961627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR+College+Of+Engineering!5e0!3m2!1sen!2sin!4v1546346410996" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                </div>
                <div className="col-md-4">
                    <h5>Contact us:</h5>
                    <p>CVR College Of Engineering,</p>
                    <p>Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),</p>
                    <p>Rangareddy (D), Telangana 501 510</p>
                    <p>Phone: 08414 661 601</p>
                    <p>Email: principal@cvr.ac.in</p><br />
                </div>
                <div className="col-md-4">
                    <h6>Designed by</h6>
                    <p>NoobyScoob</p><br />
                    <img style={{marginRight: '1rem'}} src={require('../img/github.svg')} alt="github" height="30" width="30"/>
                    <img src={require('../img/instagram.svg')} alt="instagram" height="30" width="30"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;