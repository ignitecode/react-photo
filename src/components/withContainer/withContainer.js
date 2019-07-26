import React, { Component } from 'react';
import './withContainer.css';
import Navbar from "../Navbar/Navbar";
import { Container } from "semantic-ui-react";


/**
 * HOC wrapping a base component with a provided container and navbar
 * @param BaseComponent
 */
const withContainer = (BaseComponent) => {
  return class Enhanced extends Component {
    render() {
        return (
            <Container fluid>
              <Navbar />
              <div className="p-4">
                <BaseComponent {...this.props} />
              </div>
            </Container>
        )
    }
  }
};

export default withContainer;
