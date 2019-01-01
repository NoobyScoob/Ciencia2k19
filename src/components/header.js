import React from 'react';

const Header = (props) => {
    
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand" href="http://cvr.ac.in"><img className="img-fluid" src={ props.logo } alt="logo-cvr"/></a>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggler navbar-button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-pill">
                                <a className="nav-link" href="#about" data-toggle="modal" data-target="#AboutCiencia">About</a>
                                <div className="modal fade" id="AboutCiencia" tabIndex="-1" role="dialog" aria-labelledby="AboutCienciaTitle"
                                    aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="AboutCienciaTitle">About Ciencia</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                { props.about }
                                                <i>This text can be changed accordingly</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-pill">
                                <a className="nav-link" onClick={ props.handleScrollToRef } href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        );
    }

export default Header;