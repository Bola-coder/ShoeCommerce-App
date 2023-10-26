import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScreenHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <FontAwesome
        name="long-arrow-left"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 3,
  },
});

export default ScreenHeader;
