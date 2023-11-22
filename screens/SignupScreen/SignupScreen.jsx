import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import AppButton from "../../components/AppButton";

const SignupScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.signup}>
      <Image
        source={require("./../../assets/images/shoeFour.png")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Explore our world of sneakers</Text>
      </View>
      {/* The Input form */}
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            // placeholderTextColor="#FFF"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            // placeholderTextColor="#FFF"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            // placeholderTextColor="#FFF"
            secureTextEntry={hidePassword}
          />
          <FontAwesome
            name={hidePassword ? "eye-slash" : "eye"}
            size={20}
            style={styles.toggleShowPassword}
            onPress={() => setHidePassword((prev) => !prev)}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
      </View>
      {/* Signup Button */}
      <View style={styles.inputGroup}>
        <AppButton text={"Create Account"} bg={"#2F2828"} color={"#FFF"} />
      </View>
      <View style={styles.redirect}>
        <Text style={styles.redirectText}>
          Already have an account ?{" "}
          <Text style={styles.redirectSubText}>Login</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
