import React from "react";
import { View, Text } from "react-native";

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The category meal screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
