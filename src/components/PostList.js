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
            content: "Temos vagas para desenvolvedor front-end, back-end e mobile!"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Carlos Silva",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Galera o que vocês acham de aplicações feitas em ReactJS?",
        comments: [
          {
            id: 1,
            author: {
              name: "Ricardo Gomes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Super performáticas!"
          },
          {
            id: 2,
            author: {
              name: "Lucas Ribeiro",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "São as melhores aplicações #VaiDeReact"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Matheus Oliveira",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Galera alguém sabe de vagas para desenvolvedor NodeJs?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bruno Almeida",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Tenho várias que posso te passar Matheus, me chama no privado"
          },
          {
            id: 2,
            author: {
              name: "Alex Monteiro",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Matheus tenho várias aqui também ! "
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