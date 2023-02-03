import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import {
  useSelector,
  useDispatch,
  Provider,
  createStoreHook,
} from "react-redux";
import TimePicker from "../components/timepicker";
import store from "../store";

function Home() {
  const { dispatch } = store;
  const { vehicle } = useSelector((state) => state.vehicle);

  const [isVehicleType, setshowVehicleType] = useState();
  const [isShowTime, setIsShowTime] = useState(false);

  const getVehicleType = useCallback(async () => {
    dispatch({ type: "vehicle/list" });
  });

  const myButtons = vehicle.map((p) => (
    <Button
      title={p.type}
      onPress={() => {
        console.log(p.key);
        setIsShowTime(!isShowTime);
      }}
      key={p.key}
    />
  ));



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Arrive at mall</Text>
      <Button
        title="PARK"
        onPress={async () => {
          getVehicleType();
          setshowVehicleType(!isVehicleType);
          console.log(vehicle);
        }}
      />
      <StatusBar style="auto" />

      {/* {isVehicleType && (
        <View style={styles.vehicleType}>
          <FlatList
            style={styles.button}
            ItemSeparatorComponent= {ItemSeparatorView}
            data={vehicle}
            extraData={vehicle}
            renderItem={({ item }) => (
              <Button title={item} style={styles.button}>
                {item}
              </Button>
            )}
          />
        </View>
      )} */}

      {isVehicleType && <View style={styles.vehicleType}>{myButtons}</View>}
      {isShowTime && <TimePicker isShowTime={isShowTime}  setIsTime={setIsShowTime}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 100,
    height: "10%",
  },
  vehicleType: {
    flex: 0.2,
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 30,
  },
});

export default Home;
