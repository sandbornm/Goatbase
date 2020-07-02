import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


import axios from "axios"

import { NOTE_API_URL } from "../constants/";

class NewNoteForm extends React.Component {
	state = {
		pk: 0,
		name: "",
		text: ""
	};

	componentDidMount() {
		if (this.props.note) { 
		const { pk, name, text }  = this.props.note;
		this.setState({ pk, name, text });
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	createNote = e => {
		e.preventDefault();
		axios.post(NOTE_API_URL, this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	editNote = e => {
		e.preventDefault();
		axios.put(NOTE_API_URL + this.state.pk, this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	defaultIfEmpty = value => {
		return value === "" ? "" : value;
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
			<Form onSubmit={this.props.note ? this.editNote : this.createNote}>
				<FormGroup>
					<Label for="name">Name:</Label>
					<Input
						type="text"
						name="name"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.name)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="text">Text:</Label>
					<Input
						type="text"
						name="text"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.text)}
					/>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		);
	}
}

export default NewNoteForm;