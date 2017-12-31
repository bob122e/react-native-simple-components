import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { H1, H2, H3, H4, H5, H6 } from '../components';

class Typography extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
          <H1>Heading</H1>
          <H2>Heading</H2>
          <H3>Heading</H3>
          <H4>Heading</H4>
          <H5>Heading</H5>
          <H6>Heading</H6>
      </View>
    );
  }
}

export default Typography;