import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MainBoard = () => {
  return (
    <View style={styles.mainBoardContainer}>
      <View style={styles.backgroundBrightShadow} />
      <Image
        source={require("../assets/images/fireLogo.png")}
        style={styles.mainBoardImage}
      />
      <Text style={styles.mainBoardText}>104 days</Text>
    </View>
  );
};

export default MainBoard;

const styles = StyleSheet.create({
  mainBoardContainer: {
    width: 347,
    height: 237,
    borderRadius: 16,
    backgroundColor: "rgba(0, 18, 36, 0.7)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 4,
    position: "relative",
    overflow: "hidden",
  },
  backgroundBrightShadow: {
    width: 240,
    height: 300,
    position: "absolute",
    backgroundColor: "rgba(127, 149, 171, 0.5)",
    transform: [{ rotateZ: "-19.4deg" }],
    top: -50,
    left: 150,
  },
  mainBoardText: {
    color: "white",
    fontSize: 52,
    fontWeight: "900",
    top: 140,
    left: 70,
  },
  mainBoardImage: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});
