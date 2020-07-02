import React, { Component, Fragment } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import Home from "./components/Home";
import NewNoteForm from "./components/NewNoteForm"
import NotFound from  "./components/NotFound"
import NewPostForm from "./components/NewPostForm"

class App extends Component {
		
  render() {
    return (
    	<BrowserRouter>
    	<Switch>
    	<Route exact path="/new/note/" component={NewNoteForm} />
    	<Route exact path="/new/post/" component={NewPostForm} />
    	<Route component = {NotFound} />
    	</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;