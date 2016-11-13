import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
const todos= [
{
	task: 'learn react and redux',
	isCompleted: false,
},
{
	task:'have lunch',
	isCompleted: false,
}
];

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			todos
		}
	}

	//immutable
	createTask(task){
		let updatedtodos = this.state.todos.concat({
			task,
			isCompleted:false
		});
		this.setState({todos:updatedtodos});
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos,todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos:this.state.todos});

	}

	saveTask(oldTask,newTask){
		const foundTodo = _.find(this.state.todos,todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({todos:this.state.todos});
	}
	deleteTask(task){
		_.remove(this.state.todos,todo => todo.task===task);
		this.setState({todos:this.state.todos});
	}
	render(){
		return(
			<div>
				<h1>
					React Todo
				</h1>
				<CreateTodo todos={this.state.todos} createTask= {this.createTask.bind(this)}/>
				<TodosList todos={this.state.todos} 
							toggleTask={this.toggleTask.bind(this)} 
							saveTask={this.saveTask.bind(this)} 
							deleteTask={this.deleteTask.bind(this)}/>
			</div>
			);
	}
};