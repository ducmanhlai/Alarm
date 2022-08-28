import { View,Text } from "react-native";
import styles_body from "../../styles/styles_body";
import React from "react";
import TimePicker from "./timePicker";
export default function Body(){
    return (
    <View style={styles_body}>
      <TimePicker></TimePicker>
      </View>
    )
}