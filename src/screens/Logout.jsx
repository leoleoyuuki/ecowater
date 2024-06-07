
import React, { useState } from "react";
import {

  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logout({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.removeItem("logged").then((value) => {
          Alert.alert("Alerta", "Usuário removeu o login."); 
          navigation.navigate("Login");
      });
    }, [])
  );

  return (
    <>
      <Header navigation={navigation} menu={false} />
      <ImageBackground
        source={require("../../assets/bgweb.png")}
        style={styles.container}
      >
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
