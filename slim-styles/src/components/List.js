import React from 'react';
import '../Styles/FriendCard.css';


function List(props) {
  return (
  <ul className="list-group">
      {props.blog.map(item => (
          <li className='list-group-item' key={item.id}>
      {item.question}
      <br></br>
   
      <li className="list-answer" key={item.id}>
       {item.answer}
       </li>
       </li>   
      ))}
  </ul>
  );
}

export default List;
