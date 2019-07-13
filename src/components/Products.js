import React, { Component } from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products } = this.props;
    let elmProducts = products.map(product => (
      <Col key={product.id} md={3}>
        <Product product={product} />
      </Col>
    ));

    return <Row>{elmProducts}</Row>;
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  null
)(Products);
