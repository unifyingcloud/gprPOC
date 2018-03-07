import {connect} from 'react-redux';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {JsonForms, getData} from '@jsonforms/core';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">REGISTRO NACIONAL​ DEL DELITO DE TORTURA</h1>
            <p className="App-intro">prevención y combate</p>
          </header>
        </div>

        <h4 className="data-title">Formulario Ejemplo</h4>
        <div className="data-content">
          <pre>{this.props.dataAsString}</pre>
        </div>

        <div className="demoform">
          <JsonForms />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { dataAsString: JSON.stringify(getData(state), null, 2) }
};

export default connect(mapStateToProps, null)(App);

