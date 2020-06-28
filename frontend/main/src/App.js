import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {

	state = {
		title: '',
		tags: '',
		image: null,
		name: '',
		text: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	};

	handleImageChange = (e) => {
		this.setState({
			image: e.target.files[0]
		})
	};

	handleSubmitPost = (e) => {
		e.preventDefault();
		console.log(this.state);
		let form_data = new FormData();
		form_data.append('title', this.state.title);
		form_data.append('tags', this.state.tags);
		form_data.append('image', this.state.image, this.state.image.name);
		let url = 'http://localhost:8000/api/posts/';
		axios.post(url, form_data, {
			headers: {
				'content-type': 'multipart/form-data'
			}

		})
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err))
	};

	handleSubmitNote = (e) => {
		e.preventDefault();
		console.log(this.state);
		let form_data = new FormData();
		form_data.append('name', this.state.name);
		form_data.append('text', this.state.text);
		let url = 'http://localhost:8000/api/notes/';
		axios.post(url, form_data, {
			headers: {
				'content-type': 'multipart/form-data'
			}

		})
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err))
	};
		
  render() {
    return (
    	<Fragment>
    	<Header/>
    	<Home />
    	</Fragment>
    );
  }
}

export default App;