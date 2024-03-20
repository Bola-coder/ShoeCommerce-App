import { View, Text, StyleSheet, Image } from "react-native";
import femaleImage from "./../assets/images/femaleImage.png";
import { LinearGradient } from "expo-linear-gradient";

const CategoryCard = ({ name, image }) => {
  return (
    <LinearGradient
      colors={["#ECCD5F", "#C5FF7B"]}
      locations={[0.2, 0.9]}
      style={styles.category}
    >
      <Text style={styles.categoryText}>{name}</Text>
      <Image source={image} />
    </LinearGradient>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  category: {
    width: 148,
    height: 82,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 20,
    // backgroundColor: "#5c9cd4",
    backgroundColor: "#2F2828",
    marginVertical: 10,
    borderRadius: 10,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    fontFamily: "Montserrat-Bold",
  },
});
