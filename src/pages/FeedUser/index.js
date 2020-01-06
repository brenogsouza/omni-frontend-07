import React, { Component } from "react";

import api from "../../services/api";

import "./FeedUser.css";
import { more, send, comment, like } from "../../assets";

export default class FeedUser extends Component {
  state = {
    feed: []
  };
  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({ feed: response.data });
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
                <img src={like} alt="curtir" />
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
