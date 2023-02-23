import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Home } from "./src";
import { HomeStyle as hs } from "./src/styles";

export default function App() {
  return (
    <View style={hs.wrapper}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
