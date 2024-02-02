import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SectionTitle = ({ name, onBtnPress }) => {
  return (
    <View style={styles.sectionTitile}>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onBtnPress}
      >
        <Text style={styles.btnText}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  sectionTitile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
  },

  btn: {
    padding: 10,
    // backgroundColor: "#2F2828",
    borderRadius: 30,
    // opacity: 0.9,
  },

  btnText: {
    // color: "#fff",
    fontSize: 16,
    color: "#2F2828",
    fontFamily: "Montserrat-Black",
  },
});
