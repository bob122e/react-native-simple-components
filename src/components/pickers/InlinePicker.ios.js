import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  PickerIOS,
  View,
  Button
} from 'react-native';
import { setTimeout } from 'timers';
const colors = require('../colors')

class InlinePicker extends PureComponent {

  constructor() {
    super();
    this.state = {
      value: null
    }
  }

  onChange(value) {
    this.setState({value});
  }

  render() {
      var props = this.props;
    return (
        <View>
            <Text ref='text'>{this.state.value}</Text>
            <PickerIOS ref='picker'
              selectedValue={this.state.value}
              onValueChange={this.onChange.bind(this)}
            >
              <PickerIOS.Item 
                key='java'
                value='java'
                label='Java' />
              <PickerIOS.Item 
                key='python'
                value='python'
                label='Python' />
            </PickerIOS>
        </View>
    );
  }
}

export default InlinePicker

