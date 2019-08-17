import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { version: Platform.version, os: Platform.OS };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header message='User Not logged In' />
        <Hero />
        <Menu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
