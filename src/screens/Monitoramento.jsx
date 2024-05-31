import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BarChart, PieChart } from "react-native-chart-kit";

export default function Monitoramento({ navigation }) {
  const [embarcacoes, setEmbarcacoes] = useState([]);

  const getEmbarcacoes = async () => {
    try {
      // Lógica de requisição para buscar informações das embarcações (substitua pelos dados reais)
      const dadosEmbarcacoes = [
        {
          id: 1,
          nome: "Embarcação 1",
          tipo: "Cargueiro",
          bandeira: "Brasil",
          capacidade: 10000,
          anoFabricacao: 2015,
          sensores: [
            {
              id: 1,
              tipo: "CO2",
              localizacao: "10.1234,-20.5678",
              dataInstalacao: "2022-01-01",
              status: "Ativo",
              nivelPoluicao: 50,
            },
            {
              id: 2,
              tipo: "Óleo",
              localizacao: "10.4321,-20.8765",
              dataInstalacao: "2022-02-01",
              status: "Inativo",
              nivelPoluicao: 30,
            },
          ],
          incidentes: [
            {
              id: 1,
              data: "2024-05-30",
              descricao: "Vazamento de óleo",
              tipoPoluicao: "Óleo",
              severidade: "Alta",
            },
          ],
        },
        {
          id: 2,
          nome: "Embarcação 2",
          tipo: "Petroleiro",
          bandeira: "EUA",
          capacidade: 15000,
          anoFabricacao: 2018,
          sensores: [
            {
              id: 1,
              tipo: "CO2",
              localizacao: "15.6789,-25.9876",
              dataInstalacao: "2022-03-15",
              status: "Ativo",
              nivelPoluicao: 60,
            },
            {
              id: 2,
              tipo: "Óleo",
              localizacao: "15.4321,-25.8765",
              dataInstalacao: "2022-04-20",
              status: "Ativo",
              nivelPoluicao: 40,
            },
          ],
          incidentes: [],
        },
        {
          id: 3,
          nome: "Embarcação 3",
          tipo: "Porta-Contentores",
          bandeira: "China",
          capacidade: 20000,
          anoFabricacao: 2017,
          sensores: [
            {
              id: 1,
              tipo: "CO2",
              localizacao: "20.9876,-30.1234",
              dataInstalacao: "2022-05-10",
              status: "Ativo",
              nivelPoluicao: 55,
            },
          ],
          incidentes: [
            {
              id: 1,
              data: "2023-11-18",
              descricao: "Colisão com iceberg",
              tipoPoluicao: "Óleo",
              severidade: "Média",
            },
          ],
        },
        {
          id: 4,
          nome: "Embarcação 4",
          tipo: "Navio de Cruzeiro",
          bandeira: "Itália",
          capacidade: 5000,
          anoFabricacao: 2019,
          sensores: [
            {
              id: 1,
              tipo: "CO2",
              localizacao: "25.3456,-35.6789",
              dataInstalacao: "2022-06-25",
              status: "Inativo",
              nivelPoluicao: 35,
            },
          ],
          incidentes: [],
        },
        {
          id: 5,
          nome: "Embarcação 5",
          tipo: "Navio de Pesquisa",
          bandeira: "Alemanha",
          capacidade: 8000,
          anoFabricacao: 2016,
          sensores: [
            {
              id: 1,
              tipo: "CO2",
              localizacao: "30.6789,-40.5432",
              dataInstalacao: "2022-07-30",
              status: "Ativo",
              nivelPoluicao: 45,
            },
            {
              id: 2,
              tipo: "Óleo",
              localizacao: "30.8765,-40.4321",
              dataInstalacao: "2022-08-30",
              status: "Inativo",
              nivelPoluicao: 25,
            },
          ],
          incidentes: [
            {
              id: 1,
              data: "2024-02-12",
              descricao: "Acidente com redes de pesca",
              tipoPoluicao: "Resíduos",
              severidade: "Baixa",
            },
          ],
        },
      ];

      setEmbarcacoes(dadosEmbarcacoes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmbarcacoes();
  }, []);

  const renderSensorData = (sensores) => {
    const sensorData = {
      CO2: 0,
      Óleo: 0,
    };

    sensores.forEach((sensor) => {
      sensorData[sensor.tipo] += sensor.nivelPoluicao;
    });

    return Object.keys(sensorData).map((tipo) => ({
      name: tipo,
      nivelPoluicao: sensorData[tipo],
    }));
  };
  const renderBandeiraData = (embarcacoes) => {
    // Inicializar um objeto com todas as bandeiras e contadores zero
    const todasBandeiras = {};
    embarcacoes.forEach((embarcacao) => {
      todasBandeiras[embarcacao.bandeira] = 0;
    });

    // Contar a quantidade de embarcações para cada bandeira
    embarcacoes.forEach((embarcacao) => {
      todasBandeiras[embarcacao.bandeira]++;
    });

    // Transformar o objeto em um array de objetos com o nome da bandeira e a quantidade de vezes que ela aparece
    return Object.keys(todasBandeiras).map((bandeira, index) => ({
      name: bandeira,
      quantidade: todasBandeiras[bandeira],
      color: colors[index % colors.length], // Selecionando cores da paleta
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
      <Header navigation={navigation} />
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.bg}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Monitoramento</Text>
          {embarcacoes.map((item) => (
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
              <Text style={styles.sectionTitle}>Sensores</Text>
              <BarChart
                style={styles.chart}
                data={{
                  labels: renderSensorData(item.sensores).map(
                    (sensor) => sensor.name
                  ),
                  datasets: [
                    {
                      data: renderSensorData(item.sensores).map(
                        (sensor) => sensor.nivelPoluicao
                      ),
                    },
                  ],
                }}
                width={300}
                height={200}
                yAxisSuffix="ppm"
                chartConfig={{
                  backgroundColor: "#FFFFFF",
                  backgroundGradientFrom: "#FFFFFF",
                  backgroundGradientTo: "#FFFFFF",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
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
    paddingTop: 20, // Adicionando padding superior para ajustar a posição da barra de rolagem
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
