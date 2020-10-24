import React, { useState, useEffect, } from 'react';
import { Link, } from "react-router-dom";
import { Card, Header, Button, } from 'semantic-ui-react';
import axios from 'axios'


const Playlists = () => {
  const [playlists, setPlaylists] = useState([
    {Playlist: "Playlist 1", Artist: "Artist 1", Song: ["Song 1", "halp", "three", "this is cool", "happiness"]}
  ]
  );

  useEffect( () => {
    axios.get(`/api/active_web_features`)
        .then(res => setPlaylists(res.data))
  },[]);

  

  return(
    playlists.map( p => (
      <Card>
        <Card.Content>
          <Card.Header>{p.Playlist}</Card.Header>
          <Card.Meta>Songs: {p.Song}</Card.Meta>
          {/* <Button color='dark blue'>
            View Playlist
          </Button>         */}
          <Button as={Link} to={`/playlists/${p.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  )
}

export default Playlists;