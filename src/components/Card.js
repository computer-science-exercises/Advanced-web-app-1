import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div class="card">
      <div class="item" key={props.grocery.id}>
        <div class="container">
          <div class="name">{props.grocery.name}</div>
          <div>{props.grocery.price}₪</div>
        </div>
        <div class="image-border">
          <img class="image" src={props.grocery.img} width="100" height="200" />
        </div>
      </div>
    </div>
  );
};

export default Card;
