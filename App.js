import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigation";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontLoaded, fontError] = useFonts({
    "Monterrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Monterrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Monterrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Monterrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Monterrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // minHeight: "100%",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
