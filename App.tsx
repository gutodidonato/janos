import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray" />
      <ImageBackground
        source={require("./src/assets/fundo.png")}
        resizeMode="cover"
        style={styles.fundoPreto}
      >
        <Image source={require("./src/assets/logo.png")} style={styles.logo} />
        <View style={styles.caixa}>
          <Text>Apenas um teste</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#777676",
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
    borderRadius: 90,
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#d4d4d4",
    borderColor: "#d4d4d4",
  },
});
