import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import TabNavigation from "./TabNavigation";
import BrandScreen from "../screens/BrandScreen/BrandScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import BrandCategoryProductsScreen from "../screens/BrandCategoryProductsScreen/BrandCategoryProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen/ProductDetailsScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrandScreen"
        component={BrandScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrandCategoryProducts"
        component={BrandCategoryProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
