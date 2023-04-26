import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from "@rneui/themed";

const CheckoutScreen = ({ route }) => {
  let { checkoutList, totalCost, styles } = route.params;

  const renderItem = ({ item }) => {
    return (
      <Card style={styles.cardStyled}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Divider />
        <SafeAreaView style={styles.cardBody}>{item.price}</SafeAreaView>
      </Card>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <FlatList renderItem={renderItem} data={checkoutList} numColumns={2} />
      </SafeAreaView>
      <SafeAreaView>
        <div style={styles.footer}>
          <span style={{ marginRight: 10 }}>
            Your Total is: ${parseFloat(totalCost)}
          </span>
        </div>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CheckoutScreen;
