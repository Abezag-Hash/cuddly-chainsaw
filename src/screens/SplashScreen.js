import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "An Application for Fishermen and Researchers,\n" + "Join us now!",
});

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0080FF" />
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.welcome}>Project Fisheye</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080FF",
  },
  welcome: {
    fontSize: 33,
    fontFamily: "monospace",
    textAlign: "center",
    margin: 20,
    color: "#FFFFFF",
  },
  instructions: {
    textAlign: "center",
    color: "#F5FCFF",
    marginBottom: 5,
  },
});

export default Splash;
