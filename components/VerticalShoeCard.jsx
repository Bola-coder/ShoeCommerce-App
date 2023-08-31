import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";

const VerticalShoeCard = () => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7}>
      <View style={styles.card}>
        <FontAwesomeIcon
          name="heart"
          size={20}
          color="#222"
          style={styles.favIcon}
        />
        <View style={styles.imgContainer}>
          <Image
            source={require("./../assets/images/shoeSeven.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>Nike Air Force I</Text>
        <Text style={styles.price}>$ 270.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalShoeCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },

  card: {
    width: 150,
    height: 170,
    backgroundColor: "#e5e3e0",
    borderRadius: 8,
  },

  favIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },

  imgContainer: {
    width: "100%",
    // height: "70%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  text: {
    marginVertical: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
