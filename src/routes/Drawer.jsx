import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Monitoramento from "../screens/Monitoramento";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Logout from "../screens/Logout";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Drawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator
      initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#25577d",
            width: 240,
          },
          drawerItemStyle: {
            marginVertical: 10,
            borderRadius: 10,
          },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
          }}
        />
        <Screen
          name="Monitoramento"
          component={Monitoramento}
          options={{
            drawerIcon: () => (
              <AntDesign name="barschart" size={24} color="black" />
            ),
          }}
        />
        <Screen
          name="Login"
          component={Login}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Screen
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: () => (
              <Ionicons name="exit-outline" size={24} color="black" />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
