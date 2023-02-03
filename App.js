import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screens/home";

import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
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
