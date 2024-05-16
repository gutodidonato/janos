import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Cadastro from "./Cadastro";

export default function Rotas() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor="gray" />
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
