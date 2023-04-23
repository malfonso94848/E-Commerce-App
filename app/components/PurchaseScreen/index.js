import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { Button } from "@rneui/base";
import { Header as HeaderRNE, HeaderProps, Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";

const PurchaseScreen = ({ route, navigation }) => {
  let { purchaseArr, styles } = route.params;

  let renderItem = ({ item }) => {
    return (
      <Card>
        <CardTitle>{item.name}</CardTitle>
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
                  styles: styles,
                })
              }
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: "Header", style: styles.heading }}
      />
      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PurchaseScreen;
