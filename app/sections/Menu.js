import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default class Menu extends Component {
  navigateToContact = () => {
    this.props.navigate("ContactRT");
  };

  onPress = () => {
    Alert.alert("شما این دکمه رو فشار دادین؟");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={this.navigateToContact}
          >
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "orange"
  },
  buttonRow: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderBottomWidth: 1
  },
  buttonStyles: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "50%"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
