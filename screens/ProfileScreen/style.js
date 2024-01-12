import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
  },

  profileContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#000",
    borderRadius: 5,
    width: "90%",
  },

  btnText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
});

export default styles;
