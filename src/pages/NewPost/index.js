import React, { Component } from 'react'

import "./NewPost.css"

export default class NewPost extends Component {
  render() {
    return (
      <form id="new__post">
        <input type="file"/>
        <input 
          type="text" 
          name="author"
          placeholder="Autor do post"
        />
        <input 
          type="text" 
          name="place"
          placeholder="Local do Post"
        />
        <input 
          type="text" 
          name="description"
          placeholder="Descrição do Post"
        />
        <input 
          type="text" 
          name="hashtags"
          placeholder="Hashtags do Post"
        />
        <button type="submit">Enviar Post</button>
      </form>
    )
  }
}
