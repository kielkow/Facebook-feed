import React from 'react';
import PropTypes from 'prop-types';

function Comment({ data }){
  return (
    <li id="comment">
      <div id="commenting">
        <p><b>{data.author.name}</b> {data.content}</p>
      </div>
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