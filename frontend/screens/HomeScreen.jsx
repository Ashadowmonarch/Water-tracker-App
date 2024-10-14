import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import MainBoard from "../components/MainBoard";
import WaterData from "../components/WaterData";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <MainBoard />
      <WaterData />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2272BE",
  },
});
