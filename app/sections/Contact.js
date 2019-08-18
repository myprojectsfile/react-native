import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

import { createStackNavigator } from "react-navigation";

export default class Contact extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: "enter your message",
      name: "enter your name",
      email: "enter your email"
    };
  }

  clearFields = () => {
    this.setState({ msg: "", name: "", email: "" });
  };

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Form</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />

        <TextInput
          style={styles.multiLineInput}
          value={this.state.msg}
          onChangeText={text => this.setState({ msg: text })}
          multiline={true}
          numberOfLines={4}
        />

        <View style={styles.rowStyle}>
          <TouchableHighlight
            onPress={this.sendMessage}
            underlayColor='#31e981'
          >
            <Text style={styles.button}>Send Message</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.clearFields}
            underlayColor='#31e981'
          >
            <Text style={styles.button}>Reset Form</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%",
    paddingTop: "10%"
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  textInput: {
    flex: 1,
    width: "80%"
  },
  multiLineInput: {
    flex: 2,
    width: "90%",
    paddingTop: 20
  },
  button: {
    flex: 1,
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 10
  },
  rowStyle: {
    flex: 1,
    flexDirection: "row"
  }
});
