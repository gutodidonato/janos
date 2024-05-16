import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Rotas from "./src/Rotas";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";

const Tab = createNativeStackNavigator();

export default function App() {
  return <Rotas />;
}
