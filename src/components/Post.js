import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }){
  return (
    <li>
      {post}
    </li>
  );
}

Post.defaultProps = {
  id: 0,
  author: {
    name: "Default",
    avatar: "Avatar default"
  },
  date: "XX - XX - XXXX",
  content: "Post default",
  comments: [
      {
      id: 0,
      author: {
        name: "Default",
        avatar: "Avatar default"
      },
      content: "Content default"
    }
  ]
};

Post.protoTypes = {
  id: PropTypes.number,
  author: {
    name: PropTypes.string,
    avatar: PropTypes.string,
  },
  date: PropTypes.string,
  content: PropTypes.string,
  comments: [
    {
      id: PropTypes.number,
      author: {
        name: PropTypes.string,
        avatar: PropTypes.string
      },
      content: PropTypes.string
    }
  ]
};

export default Post;