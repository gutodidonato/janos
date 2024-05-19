import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { AuthContext } from "../contexts/auth"



import Maps from "../Main/Maps";
import Principal from "../Main/Principal";
import Configuration from "../Main/Configuration";



import Login from "../Login/Login"
import Cadastro from "../Login/Cadastro";





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const configTab = (screenOptions = {
  tabBarStyle: {
    backgroundColor: "white",
    borderColor: "black",
  },
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: "#ffffff",
});

function Tabs() {
  return (
        <Tab.Navigator screenOptions={configTab}>
          <Tab.Screen
            name="Principal"
            component={Principal}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="home" size={20} color={"#000000"}/>
              ),
            }}
          />
          <Tab.Screen
            name="Maps"
            component={Maps}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="earth-outline" size={20} color={"#000000"} />
              ),
            }}
          />
                    <Tab.Screen
            name="Configuration"
            component={Configuration}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="person-circle-outline" size={20} color={"#000000"} />
              ),
            }}
          />
        </Tab.Navigator>
  );
}
function Rotas() {
  const { user } = useContext(AuthContext);

  const initialRoute = user ? "Principal" : "Login";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Principal" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;