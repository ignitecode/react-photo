import React, { Component } from 'react';
import { Photo } from '../../components/Photo/Photo';
import { Card } from 'semantic-ui-react';
import withContainer from '../../components/withContainer/withContainer';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    { this.props.images.map(item => <Photo key={item.id} onLike={(item) => this.props.onLike(item)} item={item} />)}
                </Card.Group>
            </div>
        )
    }
}

export default withContainer(Home);
