import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
	super(props);
	this.state={
		currentTodo: '',
		todos: []
	};
	this.onChange = this.onChange.bind(this);
	this.onSubmitText = this.onSubmitText.bind(this);
  }
  onChange(event) {
	this.setState({ currentTodo: event.target.value });
  }
  onSubmitText(event) {
    event.preventDefault();
    this.setState({
	  currentTodo: '',
      todos: [...this.state.todos, this.state.currentTodo],
    });
  }
  
  render() {
    return (
      <div id="root">
        <form onSubmit={this.onSubmitText} className="form" name="form">
          <input value={this.state.currentTodo} type="text" onChange={this.onChange}/>
          <button>Submit</button>
        </form>
		<div className="lista">
			<ol>
			{
			  this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
			}
			</ol>
		</div>
      </div>
    );
  }
}

export default App;
