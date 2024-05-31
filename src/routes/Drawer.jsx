import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Monitoramento from "../screens/Monitoramento";
export default function Drawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={
        {headerShown: false}
      }>
        <Screen name="Home" component={Home} />
        <Screen name="Monitoramento" component={Monitoramento} />
      </Navigator>
    </NavigationContainer>
  );
}
