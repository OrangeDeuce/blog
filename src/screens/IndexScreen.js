import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  //const value = useContext(BlogContext);

  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost()}></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather name="trash" style={styles.icon} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 2,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: "black",
  },
});

export default IndexScreen;
