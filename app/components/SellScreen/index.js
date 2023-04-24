import React from "react";
import { useCallback } from "react";
import { Button } from "@rneui/base";

const SellScreen = ({ route }) => {
  let { newSaleItem, styles } = route.params;

  let addNewSaleItem = useCallback(() => {
    console.log("Added item to purchase list");

    menuItems.push(newSaleItem);
    setMenuItems([...purchaseArr]);
    console.log(purchaseArr);
  }, [newSaleItem]);

  return (
    <div>
      <input
        type="text"
        id="newSaleItemName"
        placeholder="Item Name"
        value={newSaleItem}
      ></input>
      <input
        type="number"
        id="newSaleItemValue"
        placeholder="item Price"
        value={newSaleItem}
      ></input>
      <br />
      <button
        onClick={() => {
          addNewSaleItem();
        }}
      >
        Put Item For Sale
      </button>
      <br />
    </div>
  );
};

export default SellScreen;
