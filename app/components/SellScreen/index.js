import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaView, TextInput } from "react-native";
import { Button, Text, Input } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { log } from "react-native-reanimated";

const SellScreen = ({ route }) => {
  let { purchaseArr, setShoppingList, styles } = route.params;

  const [sellList, setSellList] = useState(purchaseArr);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  useEffect(() => {
    console.log(sellList);
    setShoppingList(sellList);
  }, [sellList]);

  const addItem = () => {
    const newObj = {
      id: sellList.length + 1,
      name: itemName,
      price: parseFloat(itemPrice),
    };
    setSellList([...sellList, newObj]);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <div>
        <TextInput
          id="newSaleItemName"
          placeholder="Item Name"
          value={itemName}
          style={styles.inputStyle}
          onChangeText={(text) => setItemName(text)}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          id="newSaleItemValue"
          placeholder="Item Price"
          value={itemPrice}
          style={styles.inputStyle}
          onChangeText={(number) => setItemPrice(number)}
        ></TextInput>
        <br />
        <Button
          onPress={() => {
            addItem();
          }}
        >
          Put Item For Sale
        </Button>
        <br />
      </div>
    </SafeAreaProvider>
  );
};

export default SellScreen;
