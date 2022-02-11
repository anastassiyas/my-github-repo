import React from 'react';
import products from "../products.json";
import "../Styles/Header.css";

function ProductCard(props) {
  return (
  <div className='card'>
      <div className='img-container'>
          <img alt={props.name} src={props.image} />

  </div>;
  <div className='content'>
<ul>
<li>
    <strong> Name:</strong> {props.name}
</li>
<li>
    <strong> Price:</strong> {props.name}
</li>
<li>
    <strong> Rating:</strong> {props.name}
</li>
</ul>
 </div>
 
 <span onClick={() =>props.removeFriend(props.id)} className="remove">
     ❌
     </span>
 </div>    
  );
}

export default ProductCard;
