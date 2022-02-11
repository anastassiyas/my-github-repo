import React from 'react';

function List(props) {
  return (
  <ul className="list-group">
      {props.service.map(item => (
          <li className='list-group-item' key={item.id}>
      {item.name} {item.price}
      </li>
      ))}
  </ul>
  );
}

export default List;
