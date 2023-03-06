import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Second from "./second";

function Home({navigation}) {
  return (
    // <View style={styles.container}>
    //   {/* <TouchableOpacity
    //     onPress={() => {
    //       console.log("wowowin");
    //       navigation.navigate("Second");
    //     }}
    //   >
    //     <Text>wow</Text>
    //   </TouchableOpacity> */}
    //   <Second/>
    // </View>
    <Second></Second>
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

export default Home;
