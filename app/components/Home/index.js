import React, { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "@rneui/themed";

const Home = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    cardStyled: {
      width: "45%",
    },
    cardBody: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      padding: "5px",
      margin: "5px",
    },
    headerContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#397af8",
      marginBottom: 20,
      width: "100%",
      paddingVertical: 15,
    },
    heading: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
    },
    headerRight: {
      display: "flex",
      flexDirection: "row",
      marginTop: 5,
    },
    subheaderText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    headerIcon: {
      color: "white",
      fontSize: 16,
      margin: 5,
    },
    footer: {
      height: 40,
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#2089dc",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    cardIcon: {
      color: "#2089dc",
      fontSize: 16,
    },
    countSpan: {
      backgroundColor: "white",
      color: "#2089dc",
      display: "flex",
      borderRadius: "50%",
      height: "12px",
      width: "12px",
      fontSize: "10px",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: "-7px",
      top: "-4px",
    },
    inputStyle: {
      margin: "10px",
    },
  });

  const itemsData = [
    {
      id: 1,
      name: "PS5 Console",
      price: 499.99,
    },
    {
      id: 2,
      name: "Series X Console",
      price: 399.99,
    },
    {
      id: 3,
      name: "Nintendo Switch",
      price: 299.99,
    },
    {
      id: 4,
      name: "Steam Deck (256 GB)",
      price: 529.99,
    },
  ];

  const [shoppinList, setShoppingList] = useState(itemsData);

  return (
    <SafeAreaView style={styles.container}>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <Button
          testId={"purchaseId"}
          style={styles.button}
          onPress={() =>
            navigation.navigate("Purchase Screen", {
              purchaseArr: shoppinList,
              styles: styles,
            })
          }
        >
          Purchase
        </Button>
        <Button
          testId={"sellId"}
          style={styles.button}
          onPress={() =>
            navigation.navigate("Sell Screen", {
              purchaseArr: shoppinList,
              setShoppingList: setShoppingList,
              styles: styles,
            })
          }
        >
          Sell
        </Button>
      </div>
    </SafeAreaView>
  );
};

export default Home;
