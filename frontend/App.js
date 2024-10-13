import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExploreScreen from "./screens/ExploreScreen";
import { Image } from "react-native";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const testVar = 1;
export default function App() {
  return (
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
              iconName = "add";
            } else if (route.name === "Account") {
              iconName = "person";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            // Return the icon component with the chosen icon name
            return (
              <Image source={iconName} style={{ width: 24, height: 24 }} />
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
          },
          tabBarIconStyle: {
            marginTop: 6, // Adjust icon positioning if necessary
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={ExploreScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
