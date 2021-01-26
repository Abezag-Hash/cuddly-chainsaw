import React, { Component } from "react";
import { StyleSheet, View, Alert, Button } from "react-native";
import { RNCamera } from "react-native-camera";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1, alignItems: "center" }}
          ref={(ref) => {
            this.camera = ref;
          }}
        />
        <Button
          title="Log"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => Alert.alert("Log Karle Rohit")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
});

export default HomeScreen;
