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
import { BarChart, PieChart } from "react-native-chart-kit";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Monitoramento({ navigation }) {
  const [embarcacoes, setEmbarcacoes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("logged").then((value) => {
        if (!value) {
          Alert.alert("Acesso negado", "Você precisa estar logado para acessar esta página.");
          navigation.navigate("Login");
        }
      });
    }, [])
  );

  const getEmbarcacoes = async () => {
    try {
      const response = await axios.get("http://192.168.15.58:80/monitoramentos");
      console.log(response.data);
      setEmbarcacoes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmbarcacoes();
  }, []);

  const renderPollutionData = (item) => {
    return [
      {
        name: "Nível Poluição",
        value: (item.nivelPoluicao * 5000),
      },
      {
        name: "Capacidade Embarcação",
        value: item.embarcacao.capacidade,
      },
    ];
  };

  const renderBandeiraData = (embarcacoes) => {
    const todasBandeiras = {};
    embarcacoes.forEach((embarcacao) => {
      todasBandeiras[embarcacao.embarcacao.bandeira] = 0;
    });

    embarcacoes.forEach((embarcacao) => {
      todasBandeiras[embarcacao.embarcacao.bandeira]++;
    });

    return Object.keys(todasBandeiras).map((bandeira, index) => ({
      name: bandeira,
      quantidade: todasBandeiras[bandeira],
      color: colors[index % colors.length],
    }));
  };

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3366FF",
    "#FF33FF",
    "#FFFF33",
    "#33FFFF",
    "#FF9933",
    "#FF3399",
    "#99FF33",
    "#33FF99",
  ];

  return (
    <>
      <Header navigation={navigation} menu={true} />
      <ImageBackground
        source={require("../../assets/bgweb.png")}
        style={styles.bg}
      >
        <ScrollView
          showsVerticalScrollIndicator
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Monitoramento</Text>
          {embarcacoes.map((item) => (
            <View style={styles.item} key={item.id}>
              <Text style={styles.itemTitle}>{item.embarcacao.nome}</Text>
              <Text style={styles.itemText}>Tipo: {item.embarcacao.tipo}</Text>
              <Text style={styles.itemText}>Bandeira: {item.embarcacao.bandeira}</Text>
              <Text style={styles.itemText}>
                Capacidade: {item.embarcacao.capacidade} toneladas
              </Text>
              <Text style={styles.itemText}>
                Ano de Fabricação: {item.embarcacao.anoFabricacao}
              </Text>
              <Text style={styles.sectionTitle}>Níveis de Poluição e Capacidade</Text>
              <BarChart
                style={styles.chart}
                data={{
                  labels: renderPollutionData(item).map((data) => data.name),
                  datasets: [
                    {
                      data: renderPollutionData(item).map((data) => data.value),
                    },
                  ],
                }}
                width={300}
                height={200}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#FFFFFF",
                  backgroundGradientFrom: "#FFFFFF",
                  backgroundGradientTo: "#FFFFFF",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                fromZero
              />
            </View>
          ))}
          <View style={styles.item}>
            <Text style={styles.sectionTitle}>Distribuição das Bandeiras</Text>
            <PieChart
              data={renderBandeiraData(embarcacoes)}
              width={300}
              height={200}
              chartConfig={{
                backgroundColor: "#FFFFFF",
                backgroundGradientFrom: "#FFFFFF",
                backgroundGradientTo: "#FFFFFF",
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="quantidade"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </View>
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
