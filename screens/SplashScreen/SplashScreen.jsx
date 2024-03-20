import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
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
    console.log(token);
    // console.log(token);
    if (token) {
      navigation.navigate("Tab");
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  useEffect(() => {
    startAnimation();
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
    <LinearGradient
      colors={["#ECCD5F", "#C5FF7B"]}
      locations={[0.6, 0.8]}
      style={styles.spalsh}
    >
      <Animated.View style={[styles.imageContainer, imageAnimatedStyle]}>
        <Image
          source={require("./../../assets/images/splashScreenImage.png")}
        />
      </Animated.View>
      <Animated.View style={[styles.textContainer, textAnimationStyle]}>
        <Text style={styles.text}>
          Sustainable <Text style={styles.lightText}>&</Text> Fashionable
          <Text style={styles.lightText}> footwear</Text>
        </Text>

        <Text style={styles.subText}>at your fingertips</Text>
        <View style={styles.btn}>
          <AppButton
            text={"Get Started"}
            bg={"#2F2828"}
            color={"#FFF"}
            rounded={true}
            handlePress={getAuthStatus}
          />
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

export default SplashScreen;
