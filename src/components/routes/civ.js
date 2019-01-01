import React, { Component } from 'react';
import Filters from '../filters';

class EventsCIV extends Component {
    render() {
        return (
            <div>
                <Filters department="civ" />
            </div>
        )
    }
}

export default EventsCIV;