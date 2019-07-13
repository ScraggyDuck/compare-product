import React, { Component } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./styles/Cart.css";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const elmCart = cart.map(product => {
      return (
        <Col>
          <ListGroup variant="flush" key={product.id}>
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>${product.price}</ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-center">
              {" "}
              {product.color.map(item => (
                <div
                  className="productColor"
                  style={{
                    backgroundColor: `${item}`
                  }}
                />
              ))}
            </ListGroup.Item>
            <ListGroup.Item
              className={product.condition === "Fresh" ? "fresh" : "frozen"}
            >
              {product.condition}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      );
    });

    return (
      <Row className="cart">
        <Col>
          <ListGroup className="listHead" variant="flush">
            <ListGroup.Item>&nbsp;</ListGroup.Item>
            <ListGroup.Item>Price</ListGroup.Item>
            <ListGroup.Item>Colors</ListGroup.Item>
            <ListGroup.Item>Condition</ListGroup.Item>
          </ListGroup>
        </Col>
        {elmCart}
      </Row>
    );
  }
}

export default Cart;
