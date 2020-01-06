import React, { Component } from 'react'

import "./NewPost.css"

export default class NewPost extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  }

  handleImageChange = e => {
    this.setState({
      image: e.target.files[0]
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form id="new__post" onSubmit={this.handleSubmit}>
        <input 
          type="file"
          onChange={this.handleImageChange}
          />
        <input 
          onChange={this.handleChange}
          value={this.state.author}
          type="text" 
          name="author"
          placeholder="Autor do post"
        />
        <input
          onChange={this.handleChange}
          value={this.state.place}
          type="text" 
          name="place"
          placeholder="Local do Post"
        />
        <input 
        onChange={this.handleChange}
        value={this.state.description}
          type="text" 
          name="description"
          placeholder="Descrição do Post"
        />
        <input
        onChange={this.handleChange}
        value={this.state.hashtags}
          type="text" 
          name="hashtags"
          placeholder="Hashtags do Post"
        />
        <button type="submit">Enviar Post</button>
      </form>
    )
  }
}
