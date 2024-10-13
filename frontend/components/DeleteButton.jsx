import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const DeleteButton = ({ IsDelete, SetIsDelete }) => {
  const handlePress = () => {
    SetIsDelete(1);
  };
  return (
    <TouchableOpacity
      style={styles.deleteButtonContainer}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
const styles = StyleSheet.create({
  deleteButtonContainer: {
    width: 165,
    height: 58,
    backgroundColor: "#FFDAD6",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#410E0B",
  },
  deleteButtonText: {
    fontSize: 24,
    fontWeight: "700",
  },
});
