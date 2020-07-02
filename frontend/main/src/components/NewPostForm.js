import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios"

import { POST_API_URL } from "../constants/";

class NewPostForm extends React.Component {
	state = {
		pk: 0,
		tile: "",
		tags: "",
		image: null,
	};

	componentDidMount() {
		if (this.props.post) { 
		const { pk, title, tags, image}  = this.props.post;
		this.setState({ pk, title, tags, image});
		}
	}

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

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleImageChange = (e) => {
		this.setState({
			image: e.target.files[0]
		})
	};

	createPost = e => {
		e.preventDefault();
		axios.post(POST_API_URL, this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	editPost = e => {
		e.preventDefault();
		axios.put(POST_API_URL + this.state.pk, this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	defaultIfEmpty = value => {
		return value === "" ? "" : value;
	};

	render() {
		return (
			<Form onSubmit={this.props.post ? this.editPost : this.handleSubmitPost}>
				<FormGroup>
					<Label for="title">Title:</Label>
					<Input
						type="text"
						name="title"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.title)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="tags">Tags:</Label>
					<Input
						type="text"
						name="tags"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.tags)}
					/>
				</FormGroup>

				<FormGroup>
					<Label for="image">Image:</Label>
					<Input
						type="file"
						id="image"
						accept="image/png, image/jpeg"
						onChange={this.handleImageChange} required/>
				</FormGroup>

				<Button>Submit Post</Button>
			</Form>
		);
	}
}

export default NewPostForm;