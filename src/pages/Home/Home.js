import React, { Component } from 'react';
import isNil from 'lodash/isNil';
import { Card, Image, Button } from 'semantic-ui-react';
import withContainer from '../../components/withContainer/withContainer';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    {
                        this.props.images.map((item, i) => {
                            return (
                                <Card key={i} >
                                    <Image size="medium" src={`${item.urls.full}&w=350&h=350&fit=crop`} wrapped ui={false} />
                                    <Card.Content>
                                        <Image floated="right" size="large" avatar src={item.user.profile_image.large} />
                                        <Card.Header>
                                            { isNil(item.description) || item.description.length > 40 ? 'Untitled' : item.description }
                                        </Card.Header>
                                        <Card.Meta>
                                            <span className='date'>
                                              { item.user.name }
                                            </span>
                                        </Card.Meta>
                                        <Card.Description className="mb-3">
                                            { item.alt_description }
                                        </Card.Description>
                                        <Card.Description>
                                            <Button
                                                onClick={() => this.props.onFavorite(item)}
                                                color='red'
                                                content='Like'
                                                icon='heart'
                                                label={{ basic: true, color: 'red', pointing: 'left', content: item.likes }}
                                            />
                                        </Card.Description>
                                        <div className="mt-3">
                                        {
                                            item.tags.map(({ title }, i) => <span key={i} className="badge badge-pill badge-primary mr-2" style={{ backgroundColor: 'rgb(236, 62, 82)' }}>{ title }</span>)
                                        }
                                        </div>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    }
                </Card.Group>
            </div>
        )
    }
}

export default withContainer(Home);
