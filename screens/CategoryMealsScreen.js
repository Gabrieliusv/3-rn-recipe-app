import React from "react";
import { connect } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, filteredMeals }) => {
  const categoryId = navigation.getParam("categoryId");

  const displayedMeals = filteredMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const mapStateToProps = state => ({
  filteredMeals: state.meal.filteredMeals
});

export default connect(mapStateToProps)(CategoryMealsScreen);
