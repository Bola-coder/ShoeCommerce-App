import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Brands = ({ name }) => {
  return (
    <TouchableOpacity style={styles.brand} activeOpacity={0.5}>
      <Text style={styles.brandName}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Brands;

const styles = StyleSheet.create({
  brand: {
    width: "45%",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 8,
    padding: 15,
  },

  brandName: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
