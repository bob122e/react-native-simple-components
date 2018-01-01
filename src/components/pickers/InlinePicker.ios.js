import React, { Component } from 'react';
import {
  Text,
  TextInput,
  PickerIOS,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
const colors = require('../colors')

const styles = {
  input: {
    fontSize: 22,
    backgroundColor: 'green'
  },
  picker: {
    backgroundColor: 'red',
    display: 'none'
  }
}

class InlinePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      open: props.open || false
    }
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({open: props.open})
  }

  onChange(value) {
    this.setState({value});
  }

  onSelect() {
    this.setState({open: !this.state.open})
  }

  render() {
      var props = this.props;
      var state = this.state;
    return (
        <View>
            <TouchableOpacity onPress={this.onSelect}>
              <Text style={[props.inputStyle, styles.input]}>
                {this.state.value}
              </Text>
            </TouchableOpacity>
            <View>
              <PickerIOS 
                style={[props.pickerStyle, styles.picker, { display: state.open ? 'flex' : 'none' }]}
                selectedValue={this.state.value}
                onValueChange={this.onChange}
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
            
        </View>
    );
  }
}

export default InlinePicker

