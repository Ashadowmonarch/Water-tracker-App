import { View, Text, StyleSheet, TextInput } from "react-native";
import AddButton from "../components/AddButton";
import React from "react";
import { useState } from "react";

const AddScreen = () => {
  const [waterName, setWaterName] = useState("");

  const handleChange = (e) => {
    setWaterName(e);
  };
  /**
 * 
 *   const handlePress = () => {
    mutation.mutate({ name: waterName });
    setWaterName("");
  };
 */
  return (
    <View style={styles.addScreen}>
      <View style={styles.formDetailsContainer}>
        <TextInput
          style={styles.textInput}
          value={waterName}
          placeholder="Enter water detail"
          onChangeText={setWaterName} // Correctly updates state with input value
        />
      </View>
      <AddButton waterName={waterName} setWaterName={setWaterName} />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  addScreen: {
    backgroundColor: "#2272BE",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formDetailsContainer: {
    backgroundColor: "#D1E4FF",
    width: 348,
    height: 620,
    top: 15,
  },
  addButton: {
    marginLeft: 10,
  },
  textInput: {
    width: 290,
    height: 59,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    left: 29,
    top: 37,
    fontWeight: "900",
  },
});
