import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Footer = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Image source={require("../assets/Logo.png")} style={styles.img}  />
      </TouchableOpacity>
      <Text style={styles.footerText}>
        © {new Date().getFullYear()} EcoWater Embarcações. Todos os direitos
        reservados.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#0d0d0d",
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  img: {
    width: 150,
    height: 25,
  },
  footerText: {
    paddingTop: 15,
    color: "#fff",
    fontSize: 14,
    fontWeight: "semibold",
    textAlign: "center",
  },
});

export default Footer;
