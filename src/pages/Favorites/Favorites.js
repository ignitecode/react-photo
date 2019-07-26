import React, { Component } from 'react';
import './Favorites.css';
import withContainer from "../../components/withContainer/withContainer";
import {Card, Header} from "semantic-ui-react";
import {Photo} from "../../components/Photo/Photo";

class Favorites extends Component {
    render() {
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    {
                        this.props.favorites.length === 0 ? <Header as="h1">No Favorites Yet!</Header> :
                        this.props.favorites.map(item => <Photo key={item.id} onLike={(item) => this.props.onLike(item)} item={item} />)
                    }
                </Card.Group>
            </div>
        )
    }
  }

export default withContainer(Favorites);
