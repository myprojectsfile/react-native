import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Contact extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ flex: 4, backgroundColor: "orange" }}>
          This is Contact form section 1
        </Text>
        <Text style={{ flex: 4, backgroundColor: "black", color: "white" }}>
          This is Contact form section 1
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  }
});
