import React, { Component } from 'react';
import withContainer from '../../components/withContainer/withContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <h1>Home</h1>
    )
  }
}

export default withContainer(App);
