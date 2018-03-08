import {connect} from 'react-redux';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {JsonForms, getData} from '@jsonforms/core';


class App extends Component {
  render() {
    return (
      <div class="container">
          <ol class="breadcrumb">
                 <li><a href="http://www.gob.mx/"><i class="icon icon-home"></i></a></li>
              <li><a href="http://www.fepadenet.gob.mx/">Inicio</a></li>
               <li class="active">Delitos de tortura</li>
          </ol>
          <div class="row"  >
              <div class="col-md-8"><h1>Delitos de Tortura</h1></div>
              <div class="col-md-2"></div>
          </div>

          <div class="col-md-12 alert alert-warning"  >
                  <p  ><b>Los delitos de tortura deben ser denunciados.<br/>
                     Ayúdanos a prevenir y perseguir los delitos de tortura.</b></p>
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

