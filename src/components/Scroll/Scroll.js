import React from 'react';
import CardList from '../CardList/CardList';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid black', height: '500px'}}>
            { props.children }
        </div>
    )
}

export default Scroll;
