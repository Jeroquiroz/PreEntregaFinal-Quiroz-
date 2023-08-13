import React from 'react';
import Item from '../item/item.js';

const ItemList = ({ items }) => {
  return (
    <div className='row' id='itemlist'>
      {items.map(item => ( 
        <div className='col-md-3' key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;



