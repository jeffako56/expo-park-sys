import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./tabs/profile";
import Settings from "./tabs/settings";

const Tab = createBottomTabNavigator();

function Second() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default Second;
