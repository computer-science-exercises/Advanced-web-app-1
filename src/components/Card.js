import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div class="card">
      <div key={props.grocery.id}>
        <div class="container">
          <div>{props.grocery.name}</div>
          <div>{props.grocery.price}₪</div>
        </div>
        <div class="image-border">
          <img src={props.grocery.img} width="100" height="100" />
        </div>
      </div>
    </div>
  );
};

export default Card;
