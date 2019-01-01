import React, { Component } from 'react';
import Filters from '../filters';

class EventsIT extends Component {
    render() {
        return (
            <div>
                <Filters department="it" />
            </div>
        )
    }
}

export default EventsIT;