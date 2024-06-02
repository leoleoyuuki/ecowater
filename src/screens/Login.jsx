import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebaseconfig";
import React, { useState } from "react";
import {
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../../components/Footer";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("logged").then((value) => {
        if (value) {
          Alert.alert("Olá", "Você já está logado."); 
          navigation.navigate("Home");
        }
      });
    }, [])
  );

  //Documentar Requisição!!!!! - Depois apagar comentario
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        AsyncStorage.setItem("logged", "true");
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Erro", "Email ou senha inválidos");
      });
  };

  return (
    <>
      <Header navigation={navigation} menu={false} />
      <ScrollView contentContainerStyle={{flex: 1}}>
          <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.container}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>Bem-Vindo de Volta!</Text>
                <View>
                    <Text style={styles.txt}>Faça o login para continuar</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      value={email}
                      placeholderTextColor={"#ffffffb8"}
                      onChangeText={(text) => setEmail(text)}
                      keyboardType="email-address"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      secureTextEntry
                      value={password}
                      placeholderTextColor={"#ffffffb8"}
                      onChangeText={(text) => setPassword(text)}
                    />
                </View>
      
              <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                <Text style={styles.txtBtn}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                <Text style={styles.cadastre}> Não tem uma conta? Crie uma! </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Footer />
            </View>
          </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.705)",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    height: "72%",
    paddingVertical: 60,
    borderRadius: 50,
    marginBottom: 70,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#25577d",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.55,
  },
  txt: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  cadastre: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  input: {
    width: 240,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "#25577d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  txtBtn: {
    color: "#fff",
    fontSize: 16,
    padding: 10,
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});
