import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      navigationOptions: {
        headerTitle: "MealCategories"
      }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(MealsNavigator);
