import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signup: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  titleContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    // fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Montserrat-Medium",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#999EA1",
    fontFamily: "Montserrat-Light",
  },

  inputGroup: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    position: "relative",
  },

  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Montserrat-Medium",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999EA1",
    padding: 10,
    borderRadius: 5,
    // color: "#999EA1",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },

  toggleShowPassword: {
    position: "absolute",
    right: 20,
    top: 40,
    zIndex: 10,
  },

  forgotPassword: {
    marginTop: 15,
    alignItems: "flex-end",
    marginRight: 20,
  },

  forgotPasswordText: {
    color: "red",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold",
  },

  redirect: {
    alignItems: "center",
    marginTop: 20,
  },

  redirectText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
  },

  redirectSubText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold",
    color: "#2F2828",
  },
});

export default styles;
