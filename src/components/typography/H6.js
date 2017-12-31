import React, { PureComponent } from 'react';
import {
  Text
} from 'react-native';
const colors = require('../colors')

const style = {
    fontSize: 16,
    color: colors.text
}

class H6 extends PureComponent {
  render() {
      var props = this.props;
    return (
        <Text style={[props.style, style]}>{props.children}</Text>
    );
  }
}

export default H6
