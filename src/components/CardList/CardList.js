import React from 'react';
import 'tachyons';
import './CardList';
import Card from '../Card/Card';
import {robots} from '../Robots/Robots';
const CardList = ({robots}) => {

  const cardComponent = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
  })

  return (
    <div className='cardList fl w-100'>
      {cardComponent}
    </div>
  )
}

export default CardList;
