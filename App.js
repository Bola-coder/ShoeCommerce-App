import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigation";

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",

//   },
// });
