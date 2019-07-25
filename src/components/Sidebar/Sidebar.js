import React, { Component } from 'react';
import {
    Sidebar,
    Menu,
    Segment,
    Header,
    Image
} from 'semantic-ui-react';
import './Sidebar.css';

export default class SideNav extends Component {
  render() {
      return (
          <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation="push"
                direction="left"
                vertical
                visible
                width='thin'
            >
              <Menu.Item href="/" as='a'>
                Home
              </Menu.Item>
              <Menu.Item href="/favorites" as='a'>
                Favorites
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                  { this.props.children }
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
      )
  }
}
