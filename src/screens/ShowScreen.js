import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  console.log(navigation.getParam("id"));
  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
/*
ShowScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <AntDesign name="edit" size={24} />
      </TouchableOpacity>
    ),
  };
};
*/

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
  },
});

export default ShowScreen;
