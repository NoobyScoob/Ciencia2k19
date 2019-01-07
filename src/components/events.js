import React, { Component } from 'react';

const Event = (props) => {
    return (
        <div className="event col-md-4" style={{maxWidth: '26.777%'}} >
            <div className="event__image">
                <img className="img-fluid" src={require(`../img/${props.data.id}.jpg`)} alt="event" />
            </div>
            <div className="event__details">
                <h4 className="event__heading">{ props.data.name }</h4>
                <a className="event__about" href="#aboutEvent" data-toggle="modal" data-target={ "#Modal" + props.data.id }>About Event</a>
                <div className="modal fade" id={"Modal" + props.data.id} tabIndex="-1" role="dialog" aria-labelledby={ "ModalTitle" + props.data.id }
                aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id={"ModalTitle" + props.data.id}>{props.data.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div className="modal-body">
                                {props.data.about}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Registration fee */}
            </div>
            <div className="register">
                <h6 className="legend">Contact</h6>
                <div className="event__managers">
                    <p className="name">{ props.data.contact[0].name }, { props.data.contact[0].phone }</p>
                    <p className="name">{ props.data.contact[1].name }, { props.data.contact[1].phone }</p>
                </div>
                <a className="event__resgister" href="#registerLink">Register</a>
            </div>
        </div>    
    )
}

const Row = (props) => {
    return (
        <div className="row">
            {
                props.data.map( (event, index) => {
                    return (
                        <Event key={index} data={event}/>
                    )
                })
            }
        </div>
    );
}


class Events extends Component {
    render() {
        return (
            <div className="container events">
                { 
                    this.props.data.map( (event, index, data) => {
                        console.log(data.length, index);
                        if ( index % 3 === 0 ) {
                            console.log(index);
                            return (
                                <Row key={index} data={data.slice(index, index + 3 < data.length ? index + 3 : data.length)} />
                            );
                        }
                        return null
                    })
                }
            </div>
        );
    }
}

export default Events;