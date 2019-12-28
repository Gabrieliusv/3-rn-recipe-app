import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The category meal screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Detail'
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
