import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../contexts/auth";

export default function Principal({ navigation }) {
  const [number, onChangeNumber] = useState("");

  const {user, userData, logar} = useContext(AuthContext);

  console.log(user)


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fundo.png")}
        resizeMode="cover"
        style={styles.fundoPreto}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.caixa}>
          <Text>Principal</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  fundoPreto: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "50%",
    display: "flex",
    alignContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    marginTop: 120,
  },
  caixa: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 120,
    paddingTop: 40,
  },

});
