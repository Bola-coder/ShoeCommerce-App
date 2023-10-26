import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ShoeCard = ({ brand, name, price, image }) => {
  return (
    <TouchableOpacity style={styles.shoeCard} activeOpacity={0.7}>
      <View style={styles.text}>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={image}
          //   width={200}
          //   height={145}
          style={styles.shoeCardImage}
          //   resizeMode=""
        />
      </View>
    </TouchableOpacity>
  );
};

export default ShoeCard;

const styles = StyleSheet.create({
  shoeCard: {
    width: 303,
    height: 143,
    backgroundColor: "#e5e3e0",
    marginRight: 20,
    // marginTop: 20,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },

  text: {
    flexBasis: "50%",
  },

  brand: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "#aaa",
  },

  price: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
  },

  imgContainer: {
    flexBasis: "50%",
    height: "100%",
  },

  shoeCardImage: {
    width: "100%",
    height: "100%",
  },
});
