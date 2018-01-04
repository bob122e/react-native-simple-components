import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  PickerIOS,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  DatePickerIOS
} from 'react-native';
var moment = require('moment');

const colors = require('../colors')

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: .5,
		borderBottomColor: colors.lightGray,
		paddingBottom: 5,
		marginLeft: 10,
		marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  placeholder: {
		fontSize: 20,
		marginBottom: 0,
		color: colors.lightGray
  },
  input: {
		fontSize: 20,
		color: colors.textDark
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },
  picker: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  btnSelect: {
    textAlign: 'right',
    paddingTop: 10,
    fontSize: 18,
    color: colors.primary,
    paddingRight: 20
  },
  btnClear: {
    textAlign: 'left',
    paddingTop: 10,
    fontSize: 18,
    color: colors.textDark,
    paddingLeft: 20
  }
})


class ModalDatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      pickerHeight: new Animated.Value(0),
      value: props.date || new Date()
    }
  }

  _btnSelect() {
    this.setState({selectedValue : this.state.value})
    if (this.props.onSelect) this.props.onSelect(val);
    this._closeModal();
  }

  _btnClear() {
    this.setState({selectedValue : null, value: null})
    if (this.props.onClear) this.props.onClear(null);
    this._closeModal();
  }

  _closeModal() {
    var opts = {
      toValue: 0, 
      duration: 200
    }
    Animated.timing(this.state.pickerHeight, opts).start(() => {
      this.setState({visible: false})
    });
  }

  _showModal() {
    this.setState({visible: true})
    var opts = {
      toValue: 220, 
      duration: 200
    }
    Animated.timing(this.state.pickerHeight, opts).start();
  }

  render() {
    var props = this.props;
    var state = this.state;

    return (
      <View style={styles.container}>
        <Modal visible={state.visible} transparent={true}>
          <TouchableWithoutFeedback onPress={this._closeModal.bind(this)}>
            <View style={styles.modal}>
              <Animated.View style={[styles.picker, {height: state.pickerHeight}]}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1}} onPress={this._btnClear.bind(this)}>
                          <Text style={styles.btnClear}>Clear</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flex: 1}} onPress={this._btnSelect.bind(this)}>
                          <Text style={styles.btnSelect}>Select</Text>
                      </TouchableOpacity>
                  </View>
                  <DatePickerIOS 
                    date={this.state.value} 
                    mode='date'
                    onDateChange={(x) => this.setState({value: x})} />
                </View>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity onPress={this._showModal.bind(this)}>
          {state.selectedValue ? 
            <Text style={styles.input}>{moment(state.selectedValue).format('MM/DD/YYYY')}</Text> :
            <Text style={styles.placeholder}>{props.placeholder || "Select Date"}</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModalDatePicker;