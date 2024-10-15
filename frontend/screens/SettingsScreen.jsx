import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDeleteAllWater } from "../services/mutations";

const SettingsScreen = () => {
  const mutation = useDeleteAllWater();
  const handlePress = () => {
    mutation.mutate();
  };
  return (
    <View style={styles.settingsScreen}>
      <TouchableOpacity onPress={handlePress} style={styles.clearingDataButton}>
        <Text style={styles.clearDataText}>Clear all data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2272BE",
  },
  clearingDataButton: {
    width: 276,
    height: 54,
    backgroundColor: "#FFDAD6",
    borderRadius: 8,
    borderColor: "#410002",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clearDataText: {
    fontSize: 32,
    fontWeight: "500",
  },
});
