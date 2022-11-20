import React from 'react';

import 'bootswatch/dist/simplex/bootstrap.css';

import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';

export default class App extends React.Component{

  render(){
    return (
      <div>
      <Navbar />
      <AppRoutes />          
      </div>
      )
    }   
  }