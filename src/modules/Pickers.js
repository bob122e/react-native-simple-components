import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { InlinePicker } from '../components';

class Pickers extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <InlinePicker />
      </View>
    );
  }
}

export default Pickers;