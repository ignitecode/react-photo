import React, { Component } from 'react';
import './withContainer.css';
import Navbar from "../Navbar/Navbar";
import Sidebar from '../Sidebar/Sidebar';
import { Container } from "semantic-ui-react";


/**
 * HOC wrapping a base component with a provided container, sidebar, and navbar
 * @param BaseComponent
 * @param navbarProps
 * @param sidebarProps
 * @returns {{new<P, S>(props: Readonly<P>): Enhanced, new<P, S>(props: P, context?: any): Enhanced, prototype: Enhanced}}
 */
const withContainer = (BaseComponent, navbarProps, sidebarProps) => {
  return class Enhanced extends Component {
    render() {
        return (
            <Container fluid>
              <Navbar {...navbarProps} />
              <Sidebar {...sidebarProps} >
                <BaseComponent/>
              </Sidebar>
            </Container>
        )
    }
  }
};

export default withContainer;
