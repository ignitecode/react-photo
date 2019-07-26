import React, { Component } from 'react';
import isNil from 'lodash/isNil';
import { Card, Image } from 'semantic-ui-react';
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
    fetch(`${API_URL}?query=ocean&per_page=9`, {
      headers: {
        Authorization: `Client-ID 51d4e3876e7e846aefdc9c0db737f7ab3dc5034b59fda2cbd5d07e2deeac1e3b`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ images: res.results });
        console.log(res.results);
      })
  }

  render() {
    return (
        <div>
          <Card.Group itemsPerRow={3}>
          {
            this.state.images.map((item, i) => {
              return (
                  <Card key={i} >
                    <Image size="medium"  src={`${item.urls.full}&w=350&h=350&fit=crop`} wrapped ui={false} />
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
                      <Card.Description>
                        { item.alt_description }
                      </Card.Description>
                      {
                        item.tags.map(({ title }) => <span className="badge badge-pill badge-primary mr-2">{ title }</span>)
                      }
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
