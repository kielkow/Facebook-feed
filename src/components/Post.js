import React from 'react';
import PropTypes from 'prop-types';

import icon from '../assets/icon.png'

import Comment from './Comment';

function Post({ data }){
  return (
    <li id="post">
      <div id="posting">
        <img width="32" height="32" src={icon}/>
        <p id="postingName">{data.author.name}</p>
      </div>
      <p id="postingContent">{data.content}</p>
        <ul>
            {data.comments.map(
              comment => <Comment key={comment.id} data = {comment} />
            )}
        </ul>
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