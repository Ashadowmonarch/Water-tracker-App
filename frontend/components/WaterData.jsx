import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import DeleteButton from "./DeleteButton";
import { useState } from "react";
const WaterData = ({ name, time_added }) => {
  const [isDelete, setIsDelete] = useState(1);
  const handlePress = (e) => {
    setIsDelete(0);
  };
  const handlePressOnDeleteButton = () => {
    setIsDelete(1);
  };
  return (
    <View style={styles.waterDataContainer}>
      <Image
        source={require("../images/waterCup.png")}
        style={styles.waterDataImage}
      />
      <View style={styles.waterDataTextContainer}>
        <Text style={styles.waterDataMainText}>{name}</Text>
        <Text style={styles.waterDataSideText}>{time_added}</Text>
      </View>
      <View>
        {isDelete === 0 && (
          <TouchableOpacity style={styles.deleteButtonTouchable}>
            <DeleteButton IsDelete={isDelete} SetIsDelete={setIsDelete} />
          </TouchableOpacity>
        )}
        {isDelete === 1 && (
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../images/verticalElipsis.png")}
              style={styles.verticalElipsis}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
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
    right: -10,
  },
  deleteButtonTouchable: {
    width: 165,
    height: 58,
    position: "absolute",
    top: -30,
    right: -20,
  },
});
