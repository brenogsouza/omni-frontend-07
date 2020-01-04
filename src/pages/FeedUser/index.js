import React, { Component } from "react";
import "./FeedUser.css";
import { more, send, comment, like } from "../../assets";

export default class FeedUser extends Component {
  render() {
    return (
      <section id="post__list">
        <article>
          <header>
            <div className="user__info">
              <span>Breno Lopes</span>
              <span className="place">Belo Horizonte</span>
            </div>
          <img src={more} alt="mais" />
          </header>
          <img src="http://localhost:3333/files/pasto.jpg" alt=""/>
          <footer>
            <div className="actions">
              <img src={like} alt="curtir"/>
              <img src={comment} alt="comentarios"/>
              <img src={send} alt="envios"/>
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa da OmniStack!
              <span>#React #Node #MongoDB</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user__info">
              <span>Breno Lopes</span>
              <span className="place">Belo Horizonte</span>
            </div>
          <img src={more} alt="mais" />
          </header>
          <img src="http://localhost:3333/files/pasto.jpg" alt=""/>
          <footer>
            <div className="actions">
              <img src={like} alt="curtir"/>
              <img src={comment} alt="comentarios"/>
              <img src={send} alt="envios"/>
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa da OmniStack!
              <span>#React #Node #MongoDB</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}
