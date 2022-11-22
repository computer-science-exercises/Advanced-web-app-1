import React from 'react';

import './Card.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div class="card">
            <Link class="no-under-line" to={"/details/" + props.grocery.id}>
                <div class="item" key={props.grocery.id}>
                    <div class="container">
                        <div class="name">{props.grocery.name}</div>
                        <div>{props.grocery.price}₪</div>
                    </div>
                    <div class="image-border">
                        <img class="image" src={props.grocery.img} width="150" height="200"/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
