import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Header from "../sections/Header";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { version: Platform.version, os: Platform.OS };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header message='User Not logged In' />
        <Text style={{ flex: 4 }}> The platform is: {this.state.os} </Text>
        <Text style={{ flex: 4 }}> This is home component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
