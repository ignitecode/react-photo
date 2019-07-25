import React, { Component } from 'react';
import { Menu, Image, Search } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import Logo from '../../resources/images/logo.png';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            value: '',
        }
    }

  handleSearchChange() {

  }

  handleResultSelect() {

  }

  render() {
      return (
          <Menu stackable>
            <Menu.Item>
              <Image alt="logo" height="30" width="30" src={Logo} />
            </Menu.Item>
            <Menu.Item
                name='Videos'
                active
            >
              Home
            </Menu.Item>

            <Menu.Item name="Favorites">
              Favorites
            </Menu.Item>
            <Menu.Item name='Search'>
                <Search
                    loading={false}
                    onResultSelect={(item) => this.handleResultSelect(item)}
                    onSearchChange={debounce(this.handleSearchChange, 500, { leading: true })}
                    results={this.state.results}
                    value={this.state.value}
                />
            </Menu.Item>
          </Menu>
      )
  }
}
