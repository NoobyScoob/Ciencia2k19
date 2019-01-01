import React, { Component } from 'react';
import Events from './events';

class Filters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeEvents: ''
        }

        // method bindings
        this.handleShowEvents = this.handleShowEvents.bind(this);
        this.handleActiveEvents = this.handleActiveEvents.bind(this);
    }

    handleActiveEvents(type) {
        this.setState({
          activeEvents: type
        });
    }

    handleShowEvents() {

        switch(this.state.activeEvents) {
          case 'technical': 
            return <Events data={ require(`../data/${ this.props.department }/technicalEvents.json`) } />
          case 'nonTechnical':
            return <Events data={ require(`../data/${ this.props.department }/nonTechnicalEvents.json`) } />
          case 'workshops':
            return <Events data={ require(`../data/${ this.props.department }/workshops.json`) } />
          default :
            return <Events data={ require(`../data/${ this.props.department }/technicalEvents.json`) } />
        }
    
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{this.props.department.toUpperCase()} </h2>
                <div className="event__type">
                    <button className="btn btn-dark" id="technical" onClick={ () => this.handleActiveEvents('technical') }>Technical</button>
                    <button className="btn btn-dark" id="non_technical" onClick={ () => this.handleActiveEvents('nonTechnical') }>Non Technical</button>
                    <button className="btn btn-dark" id="workshops" onClick={ () => this.handleActiveEvents('workshops') }>Workshops</button>
                </div>
                { this.handleShowEvents() }
            </div>
        );
    }
}

export default Filters;