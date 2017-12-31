import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Typography from './src/modules/Typography';
import Pickers from './src/modules/Pickers';

export default class App extends Component {
  render() {
    return (
      <Pickers />
    );
  }
}