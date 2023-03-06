import { NavigationContainer,Stac } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/home_omybb";
import Second from "./src/screens/second";
// import Home from "./src/screens/home";

import store from "./src/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
