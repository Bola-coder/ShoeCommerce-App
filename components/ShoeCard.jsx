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
    flexBasis: "40%",
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
    borderRadius: 8, // Make sure it's the same as shoeCard's borderRadius
    // elevation: 4, // This adds a shadow for Android
    // // For iOS, you will need the following:
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },

  shoeCardImage: {
    width: "105%", // Slightly more than 100% for the pop effect
    // height: "105%", // Slightly more than 100% for the pop effect
    // position: "absolute", // Position absolutely to overlap the container
    // bottom: -5, // Adjust as necessary to get the desired pop effect
    // right: -5, // Adjust as necessary to get the desired pop effect
    zIndex: 100,
    objectFit: "cover",
  },
});
