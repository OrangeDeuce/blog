import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  console.log(navigation.getParam("id"));
  return (
    <View>
      <Text>ShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
