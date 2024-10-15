import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Font from "expo-font";
import { usePostWaterDetail } from "../services/mutations";

const AddButton = ({ waterName, setWaterName }) => {
  const mutation = usePostWaterDetail();
  const handlePress = () => {
    mutation.mutate({ name: waterName });
    setWaterName("");
  };
  return (
    <View style={styles.addButtonMainContainer}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.addButton}
        activeOpacity={0.95}
      >
        <Image
          source={require("../assets/images/addLogo.png")}
          style={styles.image}
        />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <View style={styles.addButtonShadow} />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButtonMainContainer: {
    position: "relative",
    marginLeft: 200,
    marginTop: 30,
    marginBottom: -20,
  },
  addButton: {
    width: 136,
    height: 54,
    backgroundColor: "#9FF2E2",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  addButtonShadow: {
    width: 136,
    height: 54,
    backgroundColor: "black",
    borderRadius: 8,
    position: "absolute",
    zIndex: 0,
    top: 5,
    left: 5,
  },
  image: {
    width: 16,
    height: 16,
    objectFit: "cover",
    marginRight: 8,
  },
  addButtonText: {
    fontSize: 18,
    color: "#00201B",
  },
});
