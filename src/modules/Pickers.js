import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, InlinePicker } from '../components';

class Pickers extends Component {

  constructor() {
    super();
    this.state = {
      pickerOneOpen: false
    }
  }

  onContainerPress() {
    this.setState({
      pickerOneOpen: false
    })
  }

  render() {
    var state = this.state;
    return (
      <Container onPress={this.onContainerPress.bind(this)} style={{marginTop: 30}}>
        <InlinePicker open={state.pickerOneOpen} />
        <Text>Something down here</Text>
      </Container>
    );
  }
}

export default Pickers;