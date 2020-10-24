import React from "react";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";
import axios from "axios";


class Products extends React.Component {
  state = { products: [
    {name: "Item 1", department: "Groceries", description: "description 1", price: 1 },
    {name: "Item 2", department: "Groceries", description: "description 2", price: 2 },
    {name: "Item 3", department: "Groceries", description: "description 3", price: 3 },
    {name: "Item 4", department: "Groceries", description: "description 4", price: 4 },
  ], };

  componentDidMount() {
    axios.get("/api/products")
      .then( res => {
        this.setState({ products: res.data, });
      })
  }

  renderProducts = () => {
    const { products, } = this.state;

    if (products.length <= 0)
      return <h2>No Products</h2>
    return products.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{ product.name }</Card.Header>
          <Card.Meta>{ product.department }</Card.Meta>
          <Card.Description>
            { product.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/products/${product.id}`} color='blue'>
            View
          </Button>
          ${product.price}
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
      <Header as="h1">Products</Header>
      <br />
      <Button as={Link} color="blue" to="/products/new">
        Add Product
      </Button>
      <br />
      <br />
      <Card.Group>
        { this.renderProducts() }
      </Card.Group>
    </div>
    )
  }
}

export default Products;