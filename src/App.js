import React, { Component } from "react";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="container">
        <div className="row mt-5 mb-5">
          <Products />
        </div>
        {cart.length > 0 && <Cart cart={cart} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(App);
