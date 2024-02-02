import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

const SplashScreen = ({ navigation }) => {
  const imagePosition = useSharedValue(-400);
  const textPosition = useSharedValue(-100);

  const startAnimation = () => {
    imagePosition.value = withTiming(-100, { duration: 1000 });
    textPosition.value = withTiming(0, { duration: 1000 });
  };

  const getAuthStatus = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    if (token) {
      navigation.navigate("Tab");
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  useEffect(() => {
    startAnimation();
    const navigationTimeout = setTimeout(() => {
      getAuthStatus();
    }, 3000);
    return () => clearTimeout(navigationTimeout);
  }, []);

  // Animation styles
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: textPosition.value }],
    };
  });

  return (
    <View style={styles.spalsh}>
      <Animated.View style={[styles.imageContainer, imageAnimatedStyle]}>
        <Image
          source={require("./../../assets/images/shoeFour.png")}
          width={60}
          height={60}
        />
      </Animated.View>
      <Animated.View style={[styles.textContainer, textAnimationStyle]}>
        <Text style={styles.text}>ShoeCom</Text>
      </Animated.View>
      {/* <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SplashScreen;
