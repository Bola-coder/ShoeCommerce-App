import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import AppButton from "../../components/AppButton";

const SignupScreen = ({ navigation }) => {
  const { signup, authLoading } = useAuth();
  const [hidePassword, setHidePassword] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Heyyy!!!");
    signup(email, password, firstName, lastName, userName);
  };

  return (
    <ScrollView contentContainerStyle={styles.signup}>
      <KeyboardAvoidingView behavior="padding">
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
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              // placeholderTextColor="#FFF"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              // placeholderTextColor="#FFF"
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              // placeholderTextColor="#FFF"
              onChangeText={(text) => setUsername(text)}
            />
          </View>
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
        {/* Signup Button */}
        <View style={styles.inputGroup}>
          <AppButton
            text={"Create Account"}
            bg={"#2F2828"}
            color={"#FFF"}
            handlePress={handleSignup}
            isDisabled={authLoading}
          />
        </View>
        <View style={styles.redirect}>
          <Text style={styles.redirectText}>
            Already have an account ?{" "}
            <Text
              style={styles.redirectSubText}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignupScreen;
