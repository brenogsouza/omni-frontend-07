import React, { Component } from "react";
import io from "socket.io-client"

import api from "../../services/api";

import "./FeedUser.css";
import { more, send, comment, like } from "../../assets";

export default class FeedUser extends Component {
  state = {
    feed: []
  };
  
  async componentDidMount() {
    this.registerToSocket()

    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333')

    // post
    socket.on('post', newPost => {
      this.setState({ feed:[newPost, ...this.state.feed] })
    })
  }

  handleLike = id => {
    api.post(`/posts/${id}/likes`)
  }

  render() {
    return (
      <section id="post__list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user__info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="mais" />
            </header>
            <img src={`http://localhost:3333/files/${post.image}`} alt="" />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="curtir" />
                </button>
                <img src={comment} alt="comentarios" />
                <img src={send} alt="envios" />
              </div>
              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}
