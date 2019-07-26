import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import withContainer from '../../components/withContainer/withContainer';
import { API_URL } from "../../constants";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}?query=ocean`, {
      headers: {
        Authorization: `Client-ID 51d4e3876e7e846aefdc9c0db737f7ab3dc5034b59fda2cbd5d07e2deeac1e3b`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ images: res.results }))
  }

  render() {
    return (
        <div>
          <h1>Home</h1>
          <Card.Group itemsPerRow={3}>
          {
            this.state.images.map(item => {
              return (
                  <Card >
                    <Image size="medium" width="200" height="300" src={item.urls.full} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{item.title}</Card.Header>
                      <Card.Meta>
                        <span className='date'>
                          { item.created_at}
                        </span>
                      </Card.Meta>
                      <Card.Description>
                        { item.description + '' + item.alt_description }
                      </Card.Description>
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

export default withContainer(App);
