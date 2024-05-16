import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Maps from "./Maps";
import Principal from "./Principal";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const configTab = (screenOptions = {
  tabBarStyle: {
    backgroundColor: "white",
    borderColor: "black",
  },
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: "#d4d4d4",
});

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={configTab}>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home" size={20} color={"#000000"} />
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
    </Tab.Navigator>
  );
}
