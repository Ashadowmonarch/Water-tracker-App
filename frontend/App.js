import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AddScreen from "./screens/AddScreen";
import { Image } from "react-native";
import * as Font from "expo-font"; // Import expo-font to load custom fonts
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WaterData from "./components/WaterData";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Futura: require("./assets/fonts/futura.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null; // Optionally, you can show a loading spinner here
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // Set icons based on the route name
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? require("./assets/images/home_focus.png")
                  : require("./assets/images/home_blank.png");
              } else if (route.name === "Add") {
                iconName = focused
                  ? require("./assets/images/add_focus.png")
                  : require("./assets/images/add_blank.png");
              } else if (route.name === "Account") {
                iconName = focused
                  ? require("./assets/images/account_focus.png")
                  : require("./assets/images/account_blank.png");
              } else if (route.name === "Settings") {
                iconName = focused
                  ? require("./assets/images/settings_focus.png")
                  : require("./assets/images/settings_blank.png");
              }

              // Return the icon component with the chosen icon name
              return (
                <Image source={iconName} style={{ width: 38, height: 38 }} />
              );
            },
            tabBarActiveTintColor: "#001D35", // Active tab color
            tabBarInactiveTintColor: "#FFF", // Inactive tab color
            tabBarStyle: {
              height: 90, // Set the height of the tab bar
              paddingBottom: 12, // Add some padding to center icons/text
              backgroundColor: "#D1E4FF", // Background color for the tab bar
              borderTopWidth: 0, // Remove top border if needed
            },
            tabBarLabelStyle: {
              fontSize: 12, // Customize font size for tab labels
              fontFamily: "Futura",
            },
            tabBarIconStyle: {
              marginTop: 6, // Adjust icon positioning if necessary
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
