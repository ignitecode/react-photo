import React from 'react';
import './Photo.css';
import {Button, Card, Image} from "semantic-ui-react";
import isNil from "lodash/isNil";

export const Photo = (props) => {
  return (
      <Card key={props.item.id} >
        <Image size="medium" src={`${props.item.urls.full}&w=350&h=350&fit=crop`} wrapped ui={false} />
        <Card.Content>
          <Image floated="right" size="large" avatar src={props.item.user.profile_image.large} />
          <Card.Header>
            { isNil(props.item.description) || props.item.description.length > 40 ? 'Untitled' : props.item.description }
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              { props.item.user.name }
            </span>
          </Card.Meta>
          <Card.Description className="mb-3">
            { props.item.alt_description }
          </Card.Description>
          <Card.Description>
            <Button
                onClick={() => props.onLike(props.item)}
                color='red'
                content='Like'
                icon='heart'
                label={{ basic: true, color: 'red', pointing: 'left', content: props.item.likes }}
            />
          </Card.Description>
          <div className="mt-3">
            {
              props.item.tags.map(({ title }, i) => <span key={i + title} className="badge badge-pill badge-primary mr-2" style={{ backgroundColor: 'rgb(236, 62, 82)' }}>{ title }</span>)
            }
          </div>
        </Card.Content>
      </Card>
  )
};
