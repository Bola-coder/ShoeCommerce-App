import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ text, bg, color, handlePress, isDisabled, rounded }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        { backgroundColor: bg },
        rounded && { borderRadius: 50 },
      ]}
      onPress={handlePress}
      disabled={isDisabled}
    >
      <Text style={[styles.buttonText, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
});
