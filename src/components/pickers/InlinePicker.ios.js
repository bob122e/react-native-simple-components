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
    fontSize: 20,
    color: colors.textDark
  },
  inputContainer: {
    borderBottomWidth: .5,
		borderBottomColor: colors.lightGray,
		paddingBottom: 5,
		marginLeft: 10,
		marginRight: 10,
    marginTop: 10,
    marginBottom: 10
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
    if (props.open == undefined) return;
    if (this.state.open == props.open) return;
    if (props.open){
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }

  onChange(value) {
    this.setState({value});
    if (this.props.onChange) this.props.onChange(value);
  }

  showPicker() {
    if (this.props.onOpenStart) this.props.onOpenStart();
    Animated.timing(this.state.height, {toValue: 200, duration: 100}).start(() => {
      this.setState({open: true});
      if (this.state.value == null) {
        this.setState({value: this.props.options[0]})
      }
      if (this.props.onOpen) this.props.onOpen();
    });
  }

  hidePicker() {
    if (this.props.onCloseStart) this.props.onCloseStart();
    this.setState({open: false})
    Animated.timing(this.state.height, {toValue: 0, duration: 100}).start(() => {
      if (this.props.onClose) this.props.onClose();
    });
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
      var options = props.options.map(x => {
        return <PickerIOS.Item key={x.toString()} label={x.toString()} value={x.toString()} />
      })
    return (
        <View>
            <TouchableOpacity onPress={this.onSelect}>
              <View style={styles.inputContainer}>
                <Text style={[props.inputStyle, styles.input]}>
                  {(this.state.value || props.placeholder || "Select")}
                </Text>
              </View>
            </TouchableOpacity>
            <Animated.View style={{height: this.state.height}}>
              <PickerIOS 
                style={[props.pickerStyle, styles.picker, { display: state.open ? 'flex' : 'none' }]}
                selectedValue={this.state.value}
                onValueChange={this.onChange}
              >
                {options}
              </PickerIOS>
            </Animated.View>
            
        </View>
    );
  }
}

export default InlinePicker

