import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

	state = {
		title: '',
		tags: '',
		image: null
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

	handleSubmit = (e) => {
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
		
  render() {
    return (
      <div className="App">
      	<form onSubmit={this.handleSubmit}>
      		<p>
      			<input type="text" placeholder='Title' id='title' value={this.state.title}
      			onChange={this.handleChange} required/>
      		</p>

      		<p>
            	<input type="text" placeholder='Tags' id='tags' value={this.state.tags}
            	onChange={this.handleChange} required/>

          	</p>

          	<p>
            	<input type="file" id="image" accept="image/png, image/jpeg" onChange={this.handleImageChange} required/>
            </p>
            <input type="submit"/>
        </form>
    </div>
    );
  }
}

export default App;