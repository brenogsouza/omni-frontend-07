import React from 'react'
import { Switch, Route } from "react-router-dom";
import { FeedUser, NewPost } from "./pages";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={FeedUser} />
      <Route path="/new-post" component={NewPost} />
    </Switch>
  )
}