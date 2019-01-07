import React from 'react';
import event from '../img/event.jpg';
import event1 from '../img/event1.jpg';
import event2 from '../img/event2.jpg';

const Gallery = (props) => {
    return (
        <div className="gallery">
                    
            <div className="container photos">
                <div id="photos" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#photos" data-slide-to="0" className="active"></li>
                        <li data-target="#photos" data-slide-to="1"></li>
                        <li data-target="#photos" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={event} alt="event" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={event1} alt="event" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={event2} alt="event" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#photos" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#photos" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Gallery;