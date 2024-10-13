import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import AddButton from "./components/AddButton";
import WaterData from "./components/WaterData";
import MainBoard from "./components/MainBoard";

const BASE_URL = "http://10.0.0.250:8000/api/"; // Replace with your machine's local IP

export default function App() {
  const [waterData, setWaterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}water/`);
        setWaterData(response.data);
      } catch (err) {
        console.error("Error fetching water data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWaterData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainBoard}>
        <MainBoard />
      </View>
      <View style={styles.waterDataAndAddButtonContainer}>
        <View style={styles.waterDataContainer}>
          {waterData.map((water) => (
            <WaterData
              key={water.id}
              name={water.name}
              time_added={water.time_added}
            />
          ))}
        </View>
        <AddButton />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2272BE",
    alignItems: "center",
    justifyContent: "center",
  },
  waterDataContainer: {
    flexDirection: "column",
    gap: 12,
    marginBottom: 16,
  },
  waterDataAndAddButtonContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 16,
  },
  mainBoard: {
    marginTop: 16,
  },
});
