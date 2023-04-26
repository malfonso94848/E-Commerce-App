import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { Button } from "@rneui/base";
import { Header as HeaderRNE, HeaderProps, Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart, faPlus } from "@fortawesome/free-solid-svg-icons";

const PurchaseScreen = ({ route, navigation }) => {
  let { purchaseArr, styles } = route.params;

  const [checkoutList, setCheckoutList] = useState([]);
  const [checkoutTotalCount, setCheckoutTotalCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [newSaleItem, setNewSaleItem] = useState([]);

  const addItem = (item) => {
    setCheckoutList([
      ...checkoutList,
      { id: checkoutList.length + 1, name: item.name, price: item.price },
    ]);
  };

  useEffect(() => {
    setCheckoutTotalCount(checkoutList.length);
    setTotalCost(
      checkoutList.reduce(function (acc, obj) {
        return acc + obj.price;
      }, 0)
    );
  }, [checkoutList]);

  const renderItem = ({ item }) => {
    return (
      <Card containerStyle={styles.cardStyled}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Divider />
        <SafeAreaView style={styles.cardBody}>
          {item.price}
          <TouchableOpacity onPress={() => addItem(item)}>
            <FontAwesomeIcon icon={faPlus} style={styles.cardIcon} />
          </TouchableOpacity>
        </SafeAreaView>
      </Card>
    );
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Checkout Screen", {
                  checkoutList: checkoutList,
                  totalCost: totalCost.toFixed(2),
                  styles: styles,
                })
              }
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={styles.headerIcon}
              />
              <span style={styles.countSpan}>{checkoutTotalCount}</span>
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: "Header", style: styles.heading }}
      />
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <FlatList renderItem={renderItem} data={purchaseArr} numColumns={2} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PurchaseScreen;
