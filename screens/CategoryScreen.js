import React from "react";
import { View, Text } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The category screen!</Text>
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

export default CategoryScreen;
