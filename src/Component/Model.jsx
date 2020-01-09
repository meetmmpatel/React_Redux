import React, { Component } from "react";

export default class Model extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "Sign Up",
			description: "Enter your user name"
		};
		this.updateState = this.updateState.bind(this);
		console.log("====================================");
		console.log(this);
		console.log("====================================");
	}

	updateState() {
		this.setState({
			title: "Sign In",
			description: "Enter your password"
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.state.description}</p>
				<button onClick={this.updateState}>Click Hear </button>
			</div>
		);
	}
}
