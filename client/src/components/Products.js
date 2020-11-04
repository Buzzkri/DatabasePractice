// import React from "react";
// import { Link, } from "react-router-dom";
// import { Button, Card, Header, } from "semantic-ui-react";
// import axios from "axios";


// class Products extends React.Component {
//   state = { products: [], };

//   componentDidMount() {
//     axios.get("/api/products")
//       .then( res => {
//         this.setState({ products: res.data, });
//       })
//   }

//   renderProducts = () => {
//     const { products, } = this.state;

//     if (products.length <= 0)
//       return <h2>No Products</h2>
//     return products.map( product => (
//       <Card>
//         <Card.Content>
//           <Card.Header>{ product.name }</Card.Header>
//           <Card.Meta>{ product.department }</Card.Meta>
//           <Card.Description>
//             { product.description }
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Button as={Link} to={`/products/${product.id}`} color='blue'>
//             View
//           </Button>
//           ${product.price}
//         </Card.Content>
//       </Card>
//     ))
//   }

//   render() {
//     return (
//       <div>
//       <Header as="h1">Products</Header>
//       <br />
//       <Button as={Link} color="blue" to="/products/new">
//         Add Product
//       </Button>
//       <br />
//       <br />
//       <Card.Group>
//         { this.renderProducts() }
//       </Card.Group>
//     </div>
//     )
//   }
// }

// export default Products;




import React, { useState, useEffect, } from "react";
import axios from "axios"
import { Link, } from "react-router-dom";
import { Button, Card, Header, List, Segment } from "semantic-ui-react";


const Products = () => {

  const [products, setProducts] = useState([1,2,3,4,5,])

  useEffect( () => {
    axios.get("/api/products")
      .then( res => {
        setProducts(res.data);
      })
  }, [])


  return products.map( p => (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{ p.name }</Card.Header>
          <Card.Meta>{ p.department }</Card.Meta>
          <Card.Description>
            { p.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/products/${p.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    </>
  ))

  
}


export default Products;