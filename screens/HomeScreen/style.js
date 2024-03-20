import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  home: {
    // flexGrow: 1,
    padding: 15,
    backgroundColor: "#FFF",
  },

  headerText: {
    fontSize: 30,
    fontWeight: "500",
  },

  categories: {
    // paddingHorizontal: 10,
    gap: 10,
  },

  brands: {
    marginTop: 10,
  },

  brandContent: {
    marginTop: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
  },

  popular: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  popularContent: {
    // paddingHorizontal: 20,
  },

  latest: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  latestContent: {
    marginTop: 10,
    gap: 10,
  },

  latestContentProduct: {
    width: 170,
  },
});

export default styles;
