import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { addToCart, removeToCart } from "../actions/index";
import { connect } from "react-redux";
import "./styles/Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompapre: false
    };
  }
  onClick = () => {
    if (this.state.isCompapre === false)
      this.props.addToCart(this.props.product);
    else this.props.removeToCart(this.props.product.id);
    this.setState({
      isCompapre: !this.state.isCompapre
    });
  };

  render() {
    const { product } = this.props;
    const { isCompapre } = this.state;
    return (
      <Card className="product">
        <div className="productImage">
          <Card.Img variant="top" src={product.image} />
          <Card.ImgOverlay
            className={isCompapre ? "overlay isCompare" : "overlay"}
          >
            <button onClick={this.onClick} className="btnProduct">
              {isCompapre ? "REMOVE" : "COMPARE"}
            </button>
          </Card.ImgOverlay>
        </div>
        <Card.Body>
          <div className="price float-right">${product.price}</div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
  removeToCart: id => dispatch(removeToCart(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
