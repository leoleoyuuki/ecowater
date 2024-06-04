import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Embarcacoes({ navigation }) {
  const [embarcacoes, setEmbarcacoes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("logged").then((value) => {
        if (!value) {
          Alert.alert(
            "Acesso negado",
            "Você precisa estar logado para acessar esta página."
          );
          navigation.navigate("Login");
        }
      });
    }, [])
  );

  const getEmbarcacoes = async () => {
    try {
      // Lógica de requisição para buscar informações das embarcações (substitua pelos dados reais)
      const response = await axios.get("http://192.168.15.58:80/embarcacoes");
      console.log(response.data);
      setEmbarcacoes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmbarcacoes();
  }, []);

  return (
    <>
      <Header navigation={navigation} menu={true} />
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.bg}
      >
        <ScrollView
          showsVerticalScrollIndicator
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Monitoramento</Text>
          {embarcacoes == null ? embarcacoes.map((item) => (
            <View style={styles.item} key={item.id}>
              <Text style={styles.itemTitle}>{item.nome}</Text>
              <Text style={styles.itemText}>Tipo: {item.tipo}</Text>
              <Text style={styles.itemText}>Bandeira: {item.bandeira}</Text>
              <Text style={styles.itemText}>
                Capacidade: {item.capacidade} toneladas
              </Text>
              <Text style={styles.itemText}>
                Ano de Fabricação: {item.anoFabricacao}
              </Text>
            </View>
          )) : null}
         
          <Footer navigation={navigation} />
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#25577d",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25577d",
  },
  itemText: {
    fontSize: 16,
    color: "#25577d",
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#25577d",
    marginTop: 10,
    marginBottom: 5,
  },
  chart: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});
