import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/products">
      <Menu.Item>
        Products
      </Menu.Item>
    </Link>
    <Link to="/playlists">
      <Menu.Item>
        Playlists
      </Menu.Item>
    </Link>
    <Link to="/artists">
      <Menu.Item>
        Artists
      </Menu.Item>
    </Link>
  </Menu>
)


export default Navbar;
