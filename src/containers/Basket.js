import React, { Component } from "react";
import BasketControl from "../components/basketControls/basketControls";

const itemPrices = {
  beverage: 1.8,
  tequila: 5,
  whiskey: 15,
};

class Basket extends Component {
  state = {
    basketItems: {
      beverage: 0,
      tequila: 0,
      whiskey: 0,
    },
    prices: {
      beverage: 0,
      tequila: 0,
      whiskey: 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(items) {
    const sum = Object.keys(items)
      .map((igKey) => {
        return items[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addQuantity = (type) => {
    const oldCount = this.state.basketItems[type];
    const oldPriceCount = this.state.prices[type];
    const updatedPriceCount = oldPriceCount + itemPrices[type];
    const updatedCount = oldCount + 1;
    const updatedPrice = {
      ...this.state.basketItems,
    };
    const updatePriceState = {
      ...this.state.prices,
    };
    updatedPrice[type] = updatedCount;
    updatePriceState[type] = updatedPriceCount;
    const priceAddition = itemPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, basketItems: updatedPrice, prices: updatePriceState });
    this.updatePurchaseState(updatedPrice);
  };

  removeQuantity = (type) => {
    const oldCount = this.state.basketItems[type];
    const oldPriceCount = this.state.prices[type];
    const updatedPriceCount = oldPriceCount - itemPrices[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedPrice = {
      ...this.state.basketItems,
    };
    const updatePriceState = {
      ...this.state.prices,
    };
    updatedPrice[type] = updatedCount;
    updatePriceState[type] = updatedPriceCount;
    const priceDeduction = itemPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, basketItems: updatedPrice, prices: updatePriceState });
    this.updatePurchaseState(updatedPrice);
  };

  clearBasketHandler = () => {
    this.setState({
      basketItems: {
        beverage: 0,
        tequila: 0,
        whiskey: 0,
      },
      prices: {
        beverage: 0,
        tequila: 0,
        whiskey: 0,
      },
      totalPrice: 0,
      purchasable: false
    });
  };

  purchaseHandler = () => {
    alert('You checked out!');
  }

  render() {
    const info = {
      ...this.state.basketItems
    };

    const quantity = {
      ...this.state.basketItems
    }

    const quantityPrices = {
      ...this.state.prices
    }

    for (let key in info) {
      info[key] = info[key] <= 0;
    }

    return (
      <BasketControl
        itemAdded={this.addQuantity}
        itemRemoved={this.removeQuantity}
        disabled={info}
        purchasable={this.state.purchasable}
        ordered={this.purchaseHandler}
        price={this.state.totalPrice}
        quantity={quantity}
        priceUpdate={quantityPrices}
        clearBasket={this.clearBasketHandler}
      />
    );
  }
}

export {Basket};
