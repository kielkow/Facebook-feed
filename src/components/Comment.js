import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }){
  return (
    <li>
      {comment}
    </li>
  );
}

CommentItem.defaultProps = {
  id: 0,
  author: {
    name: "Default",
    avatar: "Avatar default"
  },
  content: "Content default"
};

CommentItem.protoTypes = {
  id: PropTypes.number,
  author: {
    name: PropTypes.string,
    avatar: PropTypes.string
  },
  content: PropTypes.string
};

export default Comment;