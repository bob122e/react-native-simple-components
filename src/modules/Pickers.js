import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, InlinePicker, InlineDatePicker, ModalPicker, ModalDatePicker } from '../components';

class Pickers extends Component {

  constructor() {
    super();
    this.state = {
      pickerOneOpen: false,
      pickerTwoOpen: false,
      options: ["", "Java", "Python", "Ruby", "C#", "Javascript", "C", "Go", "Haskel"],
      selectedDate: null,
      selectedOption: null
    }
  }


  render() {
    var state = this.state;
    return (
      <Container onPress={() => this.setState({pickerOneOpen: false, pickerTwoOpen: false})} style={{marginTop: 30}}>
        <InlinePicker 
          open={state.pickerOneOpen}
          options={state.options}
          placeholder="Select Language" 
          onChange={x => this.setState({selectedOption: x})}
          onOpen={() => this.setState({pickerOneOpen: true})}
          onOpenStart={() => this.setState({pickerTwoOpen: false})}
          onClose={() => this.setState({pickerOneOpen: false})} />
        <InlineDatePicker 
          open={state.pickerTwoOpen}
          onOpen={() => this.setState({pickerTwoOpen: true})}
          onOpenStart={() => this.setState({pickerOneOpen: false})}
          onClose={() => this.setState({pickerTwoOpen: false})}
          onChange={x => this.setState({selectedDate: x})}  />

        <Text>{`Selected Date:${state.selectedDate}`}</Text>
        <Text>{`Selected Language:${state.selectedOption}`}</Text>

        <ModalPicker options={state.options} />
        <ModalDatePicker />

      </Container>
    );
  }
}

export default Pickers;