import React from 'react';
import 'tachyons';
import './Card.css';

const Card = (props) => {
  const {name, email, id} = props;
  return (
    <div className="card bg-light-green br3 pa3 ma2 grow fl w-18 bw2 shadow-5">
      <h3>{props.name}</h3>
      <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`}/>
      <div>
        <h4>{props.email}</h4>
      </div>
    </div>
  )
}

export default Card;