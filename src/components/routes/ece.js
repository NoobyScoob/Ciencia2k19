import React, { Component } from 'react';
import Filters from '../filters';

class EventsECE extends Component {
    render() {
        return (
            <div>
                <Filters department="ece" />
            </div>
        )
    }
}

export default EventsECE;