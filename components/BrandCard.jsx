import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
const BrandCard = () => {
  return (
    <View style={styles.brandCard}>
      <View style={styles.texts}>
        <Text style={styles.textMain}>ADIDAS</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/shoeOne.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  brandCard: {
    backgroundColor: "#2F2828",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 200,
    borderRadius: 16,
    // justifyContent: "space-between",
  },

  texts: {
    // flexBasis: "40%",
    flex: 1,
    paddingLeft: 10,
  },

  textMain: {
    fontSize: 30,
    color: "#FFF",
    letterSpacing: 1,
    fontFamily: "Monterrat-Black",
  },

  imageContainer: {
    // flexBasis: "50%",
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
