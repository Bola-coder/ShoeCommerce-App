import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandCategoryProductContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: "#ECCD5F",
    backgroundColor: "#FFF",
  },

  brandCategoryProductsContent: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryProduct: {
    flexBasis: "45%",
  },
});

export default styles;
