import React, { Component } from 'react';
import {
  Text,
  TextInput,
  PickerIOS,
  View,
  Button,
  TouchableOpacity,
  Animated
} from 'react-native';
const colors = require('../colors')

const styles = {
  input: {
    fontSize: 16,
  },
  picker: {
    //height: 44
  },
  item: {
    height: 100,
    fontSize: 16
  }
}

class InlinePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      open: props.open || false,
      height: new Animated.Value(0),
    }
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillReceiveProps(props) {
    var open = !props.open;
    if (!open){
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }

  onChange(value) {
    this.setState({value});
  }

  showPicker() {
    Animated.timing(this.state.height, {toValue: 100, duration: 100}).start(() => {
      this.setState({open: true})
    });
  }

  hidePicker() {
    this.setState({open: false})
    Animated.timing(this.state.height, {toValue: 0, duration: 100}).start();
  }

  onSelect() {
    var open = this.state.open;
    if (!open){
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }

  render() {
      var props = this.props;
      var state = this.state;
    return (
        <View>
            <TouchableOpacity onPress={this.onSelect}>
              <Text style={[props.inputStyle, styles.input]}>
                {(this.state.value || "Select")}
              </Text>
            </TouchableOpacity>
            <Animated.View style={{height: this.state.height}}>
              <PickerIOS 
                itemStyle={[props.itemStyle, styles.item]}
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
            </Animated.View>
            
        </View>
    );
  }
}

export default InlinePicker

