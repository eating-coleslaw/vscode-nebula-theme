import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import uniqid from 'uniqid';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      value: '',
      taskIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.addTask(this.state.value)

    this.setState({ value: '' });

    event.preventDefault();
  }

  addTask(task) {
    this.setState({ taskIndex: this.state.taskIndex + 1 });
    
    let keyedTask = {
      name: task,
      id: uniqid(),
      number: this.state.taskIndex,
    };

    this.setState({ tasks: this.state.tasks.concat(keyedTask) });
  }
  
  render() { 
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Task Name: </label>
          <input type="text" id="taskInput" name="taskInput"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="New Task"
            required
          />
          <button type="submit" id="submit">Add</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

class Overview extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const taskList = this.props.tasks.map((keyedTask) => {
      return <TaskRow key={keyedTask.id}
                      id={keyedTask.id}
                      task={keyedTask.name}
                      index={keyedTask.number}
                      />
    });
    
    return ( 
      <ul>{taskList}</ul>
    )
  }
}

const TaskRow = (props) => {
  return (
    <li>
      <span>{props.index + 1}. {props.task}</span>
    </li>
  );
}