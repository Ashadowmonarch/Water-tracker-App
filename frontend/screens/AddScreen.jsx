import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AddScreen = () => {
  return (
    <View style={styles.addScreen}>
      <Text>AddScreen</Text>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  addScreen: {
    backgroundColor: "#000020",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
