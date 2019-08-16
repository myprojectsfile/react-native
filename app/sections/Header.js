import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  render() {
    let display = this.state.isLoggedIn
      ? "Mohammad Ahmadi"
      : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    alignSelf: "flex-start",
    paddingTop: 20,
    paddingTop: 20,
    fontSize: 20,
    color: "#ffffff"
  },
  headStyle: {
    ...Platform.select({
      android: {
        backgroundColor: "green"
      },
      ios: {
        backgroundColor: "blue"
      }
    }),
    flex: 1
  }
});
