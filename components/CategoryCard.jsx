import { View, Text, StyleSheet, Image } from "react-native";
import femaleImage from "./../assets/images/femaleImage.png";

const CategoryCard = ({ name, image }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryText}>{name}</Text>
      <Image source={image} />
    </View>
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
    backgroundColor: "#5c9cd4",
    marginVertical: 10,
    borderRadius: 10,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
