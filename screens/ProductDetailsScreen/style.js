import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productDetails: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topHalf: {
    paddingHorizontal: 10,
    // flex: 1,
    height: "55%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sizes: {
    paddingLeft: 10,
    justifyContent: "center",
  },

  sizeText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  sizeBtn: {
    backgroundColor: "#CFCFCF",
    width: 40,
    height: 40,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  ativeStyleBtn: {
    backgroundColor: "#ECCD5F",
  },

  sizeBtnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  imageContainer: {
    flexBasis: "80%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  bottomHalf: {
    padding: 10,
    width: "100%",
    height: "40%",
    backgroundColor: "#ECCD5F",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    // justifyContent: "center",
  },

  priceAndAvailability: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },

  price: {
    fontSize: 30,
    fontWeight: "bold",
  },

  fractionPrice: {
    fontSize: 20,
  },

  availabilityButton: {
    backgroundColor: "#C5FF7B",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  availabilityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    marginTop: 10,
    // padding: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "#2F2828",
    fontWeight: "normal",
  },

  colorBarContainer: {
    marginTop: 15,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: 20,
  },

  color: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  activeColor: {
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "#000",
    // padding: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  addToCartButton: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
  },

  addToCartButtonText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
