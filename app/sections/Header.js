import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";

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
    let display = this.state.isLoggedIn ? "Mohammad" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={require("./img/Globo_logo_REV.png")}
        />
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    paddingRight: 0,
    fontSize: 20,
    color: "#ffffff",
    flex: 1
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    ...Platform.select({
      android: {
        backgroundColor: "green"
      },
      ios: {
        backgroundColor: "blue"
      }
    }),
    flex: 1,
    flexDirection: "row"
  },
  logoStyle: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
