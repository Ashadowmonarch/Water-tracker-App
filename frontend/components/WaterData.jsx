import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import DeleteButton from "./DeleteButton";
import { useState } from "react";
import { useAllWater } from "../services/queries";
const WaterData = () => {
  const { data, error, isLoading } = useAllWater();

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : error ? (
        <Text>Error: ${error.message}</Text>
      ) : data ? (
        data.map((item, index) => (
          <View key={index} style={styles.waterDataContainer}>
            <Image
              source={require("../assets/images/waterCup.png")}
              style={styles.waterDataImage}
            />
            <View style={styles.waterDataTextContainer}>
              {isLoading && <Text>Loading...</Text>}
              {error && <Text>Error: {error.message}</Text>}
              {data && (
                <View>
                  <Text style={styles.waterDataMainText}>{item.name}</Text>
                  <Text style={styles.waterDataSideText}>
                    {item.time_added}
                  </Text>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/verticalElipsis.png")}
                  style={styles.verticalElipsis}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

export default WaterData;

const styles = StyleSheet.create({
  waterDataContainer: {
    width: 347,
    height: 100,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#DFECFE",
    backgroundColor: "rgba(209, 228, 255, 0.7)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  waterDataImage: {
    width: 30,
    height: 57,
  },
  waterDataTextContainer: {
    marginLeft: 25,
    marginRight: 80,
  },
  waterDataMainText: {
    fontSize: 16,
    fontWeight: "700",
  },
  waterDataSideText: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.8)",
  },
  verticalElipsis: {
    width: 8,
    height: 40,
    paddingLeft: 10,
    position: "absolute",
    top: -20,
    right: -5,
  },
  deleteButtonTouchable: {
    width: 165,
    height: 58,
    position: "absolute",
    top: -30,
    right: -20,
  },
  scrollContainer: {
    maxHeight: 450, // Set maximum height for the scrollable area
    width: "100%", // Adjust the width as necessary
  },
});
