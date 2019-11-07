import React, { Component } from 'react';

import Post from './Post';
import Comment from './Comment';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };

  // Executado assim que o componente aparece em tela
  componentDidMount(){
    const posts = localStorage.getItem('posts');

    if(posts){
      this.setState({ posts: JSON.parse(posts) })
    }
  }

  // Executado sempre que houver aletrações nas props ou estado
  componentDidUpdate(prevProps, prevState){
    if(prevState.posts !== this.state.posts){
      localStorage.setItem('posts', JSON.stringify(this.state.posts))
    }
  }

  render(){
    return (
      <form>
        <ul>
          {this.state.posts.map(post => (
            <Post 
              key={id} 
              post={post} 
            /> 
          ))},
          {this.state.posts.comments.map(comment => (
            <Comment 
              key={id} 
              comment={comment} 
            /> 
          ))},
        </ul>
      </form>
    )
  }
}

export default PostList;