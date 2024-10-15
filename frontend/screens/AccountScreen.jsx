import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AccountScreen = () => {
  return (
    <View style={styles.accountScreen}>
      <Text style={styles.accountScreenText}>
        Working on adding account functionality
      </Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  accountScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2272BE",
  },
  accountScreenText: {
    color: "#FFF",
  },
});
