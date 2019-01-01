import React, { Component } from 'react';
import Filters from '../filters';

class EventsMEC extends Component {
    render() {
        return (
            <div>
                <Filters department="mec" />
            </div>
        )
    }
}

export default EventsMEC;