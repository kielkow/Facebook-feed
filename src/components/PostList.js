import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

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
          },
        ]
      },
      {
        id: 2,
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
          },
          {
            id: 2,
            author: {
              name: "Claudio Romero",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário 2"
          }
        ]
      },
      {
        id: 3,
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
          },
          {
            id: 2,
            author: {
              name: "Claudio Romero",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário 2"
          }
        ]
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
      <form id="postlist">
        <div>
          <ul>
            {this.state.posts.map(post => <Post key={post.id} data={post} />)}
          </ul>
        </div>
      </form>
    )
  }
}

export default PostList;