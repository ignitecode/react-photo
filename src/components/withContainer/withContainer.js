import React, { Component } from 'react';
import './withContainer.css';
import Navbar from "../Navbar/Navbar";
import { Container } from "semantic-ui-react";


/**
 * HOC wrapping a base component with a provided container, sidebar, and navbar
 * @param BaseComponent
 * @param navbarProps
 */
const withContainer = (BaseComponent, navbarProps) => {
  return class Enhanced extends Component {
    render() {
        return (
            <Container fluid>
              <Navbar {...navbarProps} />
              <div className="p-4">
                <BaseComponent/>
              </div>
            </Container>
        )
    }
  }
};

export default withContainer;
