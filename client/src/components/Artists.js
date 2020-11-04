// import React, { useState, useEffect, } from "react";
// import axios from "axios"
// import { Link, } from "react-router-dom";
// import { Button, Card, Header, List, Segment } from "semantic-ui-react";



// const Artists = () => {

//   const [artists, setArtists] = useState([1,2,3])

//   useEffect( () => {
//     axios.get("/api/artists")
//       .then( res => {
//         setArtists(res.data);
//       })
//   }, [])


//   return artists.map( a => (
//     <>
//       <Card>
//         <Card.Content>
//           <Card.Header>{ a.name }</Card.Header>
//         </Card.Content>
//         <Card.Content extra>
//           <Button as={Link} to={`/artists/${a.id}`} color='blue'>
//             View
//           </Button>
//         </Card.Content>
//       </Card>
//     </>
//   ))

  
// }


// export default Artists;
import React, { useState, useEffect, } from "react";
import axios from "axios"
import { Link, } from "react-router-dom";
import { Button, Card, Header, List, Segment } from "semantic-ui-react";


const Artists = () => {

  const [artists, setArtists] = useState([1,2,3])

  useEffect( () => {
    axios.get("/api/artists")
      .then( res => {
        setArtists(res.data);
      })
  }, [])


  return artists.map( a => (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{ a.name }</Card.Header>
          <Card.Meta>{ a.id }</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/artists/${a.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    </>
  ))

  
}


export default Artists;