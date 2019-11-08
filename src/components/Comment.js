import React from 'react';
import PropTypes from 'prop-types';

function Comment(){
  return (
    <li id="comment">
      <p>COMMENT:</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled. 
        It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised.
    </li>
  );
}

Comment.defaultProps = {
  id: 0,
  author: {
    name: "Default",
    avatar: "Avatar default"
  },
  content: "Content default"
};

Comment.protoTypes = {
  id: PropTypes.number,
  author: {
    name: PropTypes.string,
    avatar: PropTypes.string
  },
  content: PropTypes.string
};

export default Comment;