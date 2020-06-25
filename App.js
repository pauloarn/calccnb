import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Routes from './src/routes.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor='#295b92'/>
        <Routes/>
      </>
    );
  }
}
