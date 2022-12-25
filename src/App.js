import React from 'react';

import 'bootswatch/dist/simplex/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';
import SessionProvider from './main/SessionProvider';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <SessionProvider>
          <Navbar />
          <AppRoutes />
        </SessionProvider>
      </div>
    )
  }
}