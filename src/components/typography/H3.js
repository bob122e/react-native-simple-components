import React, { PureComponent } from 'react';
import {
  Text
} from 'react-native';
const colors = require('../colors')

const style = {
    fontSize: 28,
    color: colors.text
}

class H3 extends PureComponent {
  render() {
      var props = this.props;
    return (
        <Text style={[props.style, style]}>{props.children}</Text>
    );
  }
}

export default H3
