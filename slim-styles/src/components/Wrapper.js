import React from 'react';
import "../Styles/Section.css"

function Wrapper(props) {
  return <div className='wrapper'>{props.children}</div>;
}

export default Wrapper;
