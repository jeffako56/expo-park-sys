import React, { useState } from "react";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import moment from "moment";

const TimePicker = ({ isShowTime, setIsShowTime }) => {
  const [pickerVis, setPickerVis] = useState(false);
  // const [date, setDate] = useState(null);
  const [date, setDate] = useState(new Date());
  const [starttime, setStartTime] = useState(new Date(Date.now()));
  const [endTime, setEndTime] = useState(new Date(Date.now()));
  const [isPosition, setIsPosition] = useState(false);
  const [timePicker, setTimePicker] = useState();
  const [isShowTimePicker, setisShowTimePicker] = useState(false);

  const onChangeHandler = (event: DateTimePickerEvent, value) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    console.log(event.type);
    setisShowTimePicker(false);
    if (isPosition) {
      setStartTime(value);
    } else {
      setEndTime(value);
    }
 
  };

  const showTimePickerHandler = ({ isPosition }) => {
    console.log(`setIsPosition : ${isPosition}`);
    if (isPosition == true) {
      setIsPosition(true);
    } else {
      setIsPosition(false);
    }
    setisShowTimePicker(!isShowTimePicker);
    console.log(isShowTimePicker);
  };

  return (
    <View>
      <View>
        {isShowTimePicker && isShowTime && (
          <RNDateTimePicker
            showTime={{ user12hours: true }}
            mode="time"
            testID="dateTimePicker"
            value={date}
            is24Hour={false}
            display="default"
            onChange={onChangeHandler}
          />
        )}
      </View>
      {isShowTime && (
        <View>
          <View style={styles.time}>
            <Text>Start Time: </Text>
            <TextInput
              style={{ backgroundColor: "#fef", width: 110 }}
              placeholder="00:00"
              keyboardType="numeric"
              autoFocus={false}
              value={moment(starttime).format(" h:mm a")}
            />
            <IconButton
              iconColor="red"
              icon="clock"
              on
              onPress={() => {
                showTimePickerHandler({ isPosition: true });
              }}
            />
          </View>

          <View style={styles.time}>
            <Text>End Time: {"  "}</Text>
            <TextInput
              style={{ backgroundColor: "#fef", width: 110 }}
              placeholder="00:00"
              keyboardType="numeric"
              value={moment(endTime, "").format(" h:mm a")}
            />
            <IconButton
              iconColor="red"
              icon="clock"
              onPress={() => {
                showTimePickerHandler({ isPosition: false });
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
});

export default TimePicker;
