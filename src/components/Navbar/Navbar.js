import React, { Component } from 'react';
import { Menu, Image, Input, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import Logo from '../../resources/images/logo.png';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            isLoading: false,
        };
    }

  render() {
      return (
          <Menu stackable>
            <Menu.Item>
              <Image alt="logo" height="30" width="30" src={Logo} />
            </Menu.Item>
            <Menu.Item name="home" onClick={() => this.props.history.push('/')} active={this.props.location.pathname === '/'}>
              Home
            </Menu.Item>
            <Menu.Item name="favorites" onClick={() => this.props.history.push('/favorites')} active={this.props.location.pathname === '/favorites'}>
              Favorites
            </Menu.Item>
            <Menu.Item name="search">
                <Input type="text" action  placeholder='Search'>
                    <input onChange={({ target }) => this.props.onInputChange(target.value)} />
                    <Button type="button" onClick={() => this.props.onSearch()}>Search</Button>
                </Input>
            </Menu.Item>
          </Menu>
      )
  }
}

export default withRouter(Navbar);
