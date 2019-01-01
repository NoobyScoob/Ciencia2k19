import React, { Component } from 'react';
import './App.css';

// images
import logo from './img/logo.png';

// app components
import Header from './components/header';
import Footer from './components/footer';
import Router from './router';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      department: '',
      activeEvents: ''
    }

    // For window scroll
    // this.myRef = React.createRef();
    // this.handleScrollToRef = this.handleScrollToRef.bind(this);
  }

  // For window scroll
  // handleScrollToRef() {
  //   window.scrollTo({
  //     top: this.myRef.current.offsetTop, 
  //     behavior: "smooth"
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header 
              about="Ciencia is a technical fest conducted once a year in CVR College of
              Engineering,
              where students showcase different technical projects and conduct
              variety of technical/non-technical events and workshops
              e.t.c., A Fest one can never forget! Come and join us."
              logo={ logo }
              //handleScrollToRef={ this.handleScrollToRef }
            />
          <div>
                <div className="container">
                    <img className="img-fluid logo" src={require('./img/ciencia_logo.png')} alt="logo" height="600" width="600" />
                </div>
          </div>

          <div className="header__bg img-fluid">
          </div>

        </div>

        <main>
          <Router />     
          {/* <h2 style={{textAlign: 'center'}} ref={ this.myRef } >Events</h2>  For window scroll */}
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
