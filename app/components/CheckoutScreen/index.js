import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const CheckoutScreen = ({ route }) => {
  return (
    <SafeAreaProvider>
      <div>CheckoutScreen</div>
    </SafeAreaProvider>
  );
};

export default CheckoutScreen;
