import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from 'react-native';

const style = {
	flex: 1,
	alignItems: 'stretch'
}

class Container extends Component {

	render() {
		var props = this.props;
		return (
			<TouchableWithoutFeedback onPress={props.onPress}>
				<View ref='container' style={[props.style, style]}>
					{props.children}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Container;