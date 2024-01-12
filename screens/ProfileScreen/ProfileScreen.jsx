import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import styles from "./style";
import { useAuth } from "../../contexts/AuthContext";
const ProfileScreen = ({ navigation }) => {
  const { logout, token } = useAuth();
  //   console.log(session);

  const handleLogout = () => {
    logout();
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.profile}>
      <ScreenHeader title={"Profile"} />
      <View style={styles.profileContent}>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
        <Text> Your token is: {token}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
