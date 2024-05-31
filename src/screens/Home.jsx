import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../../components/Footer";

export default function Home({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.bg}
      >
        <ScrollView >
          <ScrollView style={styles.container}>
              <View style={styles.section}>
                <Text style={styles.title}>Bem-vindo ao EcoWater Embarcações</Text>
                <Text style={styles.text}>
                  EcoWater Embarcações é uma plataforma inovadora e abrangente
                  dedicada ao monitoramento ambiental e gerenciamento sustentável
                  das atividades marítimas. Nosso objetivo é proporcionar um sistema
                  eficiente e preciso para o controle da poluição marinha,
                  garantindo a preservação dos nossos oceanos e a sustentabilidade
                  das operações das embarcações.
                </Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.subtitle}>Funcionalidades Principais</Text>
                <Text style={styles.subheading}>Monitoramento em Tempo Real</Text>
                <Text style={styles.text}>
                  Com a integração de sensores de última geração, nossa plataforma
                  coleta e processa dados de poluição em tempo real. Monitore níveis
                  de CO2, óleo, plástico e outras substâncias em diferentes pontos
                  das embarcações e locais estratégicos nos oceanos.
                </Text>
                <Text style={styles.subheading}>
                  Registro e Gerenciamento de Embarcações
                </Text>
                <Text style={styles.text}>
                  Adicione e gerencie informações detalhadas sobre embarcações,
                  incluindo capacidade, tipo, ano de fabricação e proprietário.
                  Nossa interface intuitiva facilita o acompanhamento e atualização
                  dos dados das embarcações cadastradas.
                </Text>
                <Text style={styles.subheading}>
                  Detecção e Registro de Incidentes
                </Text>
                <Text style={styles.text}>
                  Registre manualmente incidentes de poluição detectados e
                  complemente os dados coletados automaticamente pelos sensores.
                  Descreva o tipo de poluição, a severidade do incidente e outras
                  informações relevantes para uma análise detalhada e ações
                  corretivas.
                </Text>
                <Text style={styles.subheading}>Relatórios e Análises</Text>
                <Text style={styles.text}>
                  Gere relatórios periódicos sobre os níveis de poluição, permitindo
                  uma análise aprofundada das tendências e padrões. Utilize
                  ferramentas de visualização de dados para identificar áreas
                  críticas e tomar decisões informadas para mitigar os impactos
                  ambientais.
                </Text>
                <Text style={styles.subheading}>Alertas em Tempo Real</Text>
                <Text style={styles.text}>
                  Receba alertas imediatos quando níveis críticos de poluição forem
                  detectados. Configure notificações personalizadas via e-mail ou
                  SMS para garantir uma resposta rápida e eficaz a situações
                  emergenciais.
                </Text>
                <Text style={styles.subheading}>Melhoria Contínua</Text>
                <Text style={styles.text}>
                  Aproveite nossas funcionalidades de análise de dados históricos
                  para identificar tendências e padrões de poluição. Implementamos
                  melhorias contínuas no sistema com base no feedback dos usuários,
                  garantindo uma plataforma sempre atualizada e eficiente.
                </Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.subtitle}>Nossa Missão</Text>
                <Text style={styles.text}>
                  A missão da EcoWater Embarcações é promover a sustentabilidade e a
                  proteção do meio ambiente marinho, fornecendo uma plataforma
                  robusta e confiável para o monitoramento e gerenciamento das
                  atividades das embarcações. Trabalhamos para reduzir a poluição e
                  garantir a saúde dos nossos oceanos para as gerações futuras.
                </Text>
                <Text style={styles.text}>
                  Explore nossa plataforma e descubra como a EcoWater Embarcações
                  pode ajudar sua organização a operar de maneira mais sustentável e
                  responsável. Junte-se a nós nessa jornada para um futuro mais
                  verde e azul!
                </Text>
              </View>
          </ScrollView>
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
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#25577d',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#406882',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,

  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#6998AB',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#b9baba',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});
