import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Tab = ({ name, onPress, horizontalScroll, active }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tab,
        active && styles.activeStyles,
        horizontalScroll && styles.horixonatalScroll,
      ]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={[styles.tabName, active && styles.activeText]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    width: "45%",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 8,
    padding: 15,
  },

  horixonatalScroll: {
    width: 150,
    marginRight: 20,
  },

  activeStyles: {
    backgroundColor: "#2F2828",
  },

  activeText: {
    color: "#FFF",
  },

  tabName: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
