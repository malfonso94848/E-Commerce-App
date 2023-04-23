import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Components
import Home from "./components/Home";
import PurchaseScreen from "./components/PurchaseScreen";
import CheckoutScreen from "./components/CheckoutScreen";
import SellScreen from "./components/SellScreen";

const Stack = createNativeStackNavigator();

async function cacheFonts(fonts) {
  return fonts.map(async (font) => await Font.loadAsync(font));
}

export default function App() {
  cacheFonts([FontAwesome.font]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="Purchase Screen"
          component={PurchaseScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Checkout Screen"
          component={CheckoutScreen}
        ></Stack.Screen>
        <Stack.Screen name="Sell Screen" component={SellScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
