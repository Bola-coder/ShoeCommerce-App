import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName == "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Search") {
            iconName = focused ? "search" : "search-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Profile") {
            iconName = focused ? "person" : "person-outline";
            size = focused ? 26 : 24;
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2F2828",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveBackgroundColor: "#FFF",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          marginBottom: 0,
          paddingBottom: 5,
          //   borderRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
