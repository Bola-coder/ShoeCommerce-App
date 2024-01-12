import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import AppButton from "../../components/AppButton";
import ErrorModal from "../../components/ErrorModal";

const LoginScreen = ({ navigation }) => {
  const { login, authLoading, error } = useAuth();
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.login}>
      <Image
        source={require("./../../assets/images/shoeFour.png")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi, Welcome Back</Text>
        <Text style={styles.subtitle}>Pick up where you left off</Text>
      </View>
      {/* The Input form */}
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            keyboardType="email-address"
            // placeholderTextColor="#FFF"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            // placeholderTextColor="#FFF"
            secureTextEntry={hidePassword}
            onChangeText={(text) => setPassword(text)}
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
      {/* Login Button */}
      <View style={styles.inputGroup}>
        <AppButton
          text={"Login"}
          bg={"#2F2828"}
          color={"#FFF"}
          handlePress={handleLogin}
          isDisabled={authLoading}
        />
      </View>
      <View style={styles.redirect}>
        <Text style={styles.redirectText}>
          Don't have an account ?{" "}
          <Text
            style={styles.redirectSubText}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Signup
          </Text>
        </Text>
      </View>
      <ErrorModal visible={!!error} message={error} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
